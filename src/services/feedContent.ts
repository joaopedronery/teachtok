const baseURL = 'https://cross-platform.rp.devfactory.com';

//Types
export type ForYouResponse = {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: {
    id: string;
    answer: string;
  }[];
  user: {
    name: string;
    avatar: string;
  };
};

export const getForYou = async (): Promise<ForYouResponse> => {
  const response = await fetch(`${baseURL}/for_you`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
