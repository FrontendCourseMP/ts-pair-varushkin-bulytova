export function validate(input: string): void {
  if (!input || input.trim().length === 0) throw new Error("Пустое выражение");
  if (!/^[0-9+*. \t]+$/.test(input)) throw new Error("Недопустимые символы");
  const s = input.replace(/\s+/g, "");
  if (/^[+*]/.test(s) || /[+*]$/.test(s)) throw new Error("Выражение не должно начинаться или заканчиваться оператором");
  if (/[+*]{2,}/.test(s)) throw new Error("Две операции подряд");
  const parts = s.split(/([+*])/).filter(Boolean);
  for (const p of parts) {
    if (p === "+" || p === "*") continue;
    if (!/^\d+(\.\d+)?$/.test(p)) throw new Error(`Некорректное число: "${p}"`);
  }
}

export function evaluate(input: string): number {
  const s = input.replace(/\s+/g, "");
  const sumParts = s.split("+");
  let sum = 0;
  for (const sp of sumParts) {
    if (sp === "") continue;
    const factors = sp.split("*");
    let prod = 1;
    for (const f of factors) {
      if (f === "") continue;
      const n = Number(f);
      if (Number.isNaN(n)) throw new Error(`Не число: "${f}"`);
      prod *= n;
    }
    sum += prod;
  }
  return sum;
}

export function setupUI(): void {
  const form = document.getElementById("expr-form") as HTMLFormElement | null;
  const input = document.getElementById("expr") as HTMLInputElement | null;
  const resultEl = document.getElementById("result") as HTMLElement | null;
  const msgEl = document.getElementById("message") as HTMLElement | null;
  const clearBtn = document.getElementById("clear") as HTMLButtonElement | null;

  if (!form || !input || !resultEl || !msgEl) return;

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    msgEl.textContent = "";
    resultEl.textContent = "…";
    const expr = input.value;
    try {
      validate(expr);
      const val = evaluate(expr);
      const rounded = Number.isFinite(val)
        ? Math.round((val + Number.EPSILON) * 1e10) / 1e10
        : val;
      resultEl.textContent = String(rounded);
    } catch (e) {
      resultEl.textContent = "—";
      msgEl.textContent = e instanceof Error ? `Ошибка: ${e.message}` : "Ошибка";
    }
  });

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    msgEl.textContent = "";
    resultEl.textContent = "—";
  });
}
