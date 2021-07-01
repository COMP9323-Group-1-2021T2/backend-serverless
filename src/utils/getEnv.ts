export const getEnv = (envVar: string): string => {
  const value = process.env[envVar];

  if (!value) {
    throw new Error(`${envVar} missing`);
  }

  return value;
};
