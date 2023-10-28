export const logger = {
  log: (message: string | any) => {
    if (process.env.NODE_ENV === "development") {
      console.log(message);
    }
  },
  error: (error: unknown) => {
    if (process.env.NODE_ENV === "development") {
      let errorMessage = "Something went wrong";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      const res = (error as any)?.response.data;
      if (res) {
        errorMessage = res?.message || res?.errorMessages[0]?.message;
      }
      console.error(errorMessage);
    }
  },
};
