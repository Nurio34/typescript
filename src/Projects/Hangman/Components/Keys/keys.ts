const code_a = 97;
const code_z = 122;
const total = code_z - code_a + 1;

export const keys: string[] = [...Array(total)].map((_, index) =>
    String.fromCharCode(code_a + index),
);
