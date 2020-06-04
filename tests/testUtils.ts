const createContext = (contextOptions: ContextOptions = {}) => {
  const defaultContext: ContextOptions = {
    request: {
      body: async () => ({ value: undefined }),
      hasBody: true,
    },
    response: {
      body: "",
    },
  };
  return { ...defaultContext, ...contextOptions };
};

const createRequest = (body: any) => {
  return {
    body: async () => ({ value: body }),
    hasBody: true,
  };
};

interface ContextOptions {
  request?: {
    body: () => Promise<{ value: any }>;
    hasBody: boolean;
  };
  response?: {
    body: string;
  };
  params?: object | undefined;
}
export { createContext, createRequest };
