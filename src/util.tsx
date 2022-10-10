export function profileControl() {
  console.log("profileControl call");
}

export const userPasswordValid = (id: number, newPassword: string) => {
  if (id === 100) {
    return null;
  }

  const password = newPassword + "12345";
  return password;
};
