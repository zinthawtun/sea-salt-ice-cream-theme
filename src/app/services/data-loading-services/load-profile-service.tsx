import axios from 'axios';
import { useEffect, useState } from 'react';

type ProfileData = {
  name: string;
  title: string;
  skills: string[];
  bio: string;
  socialMedia: string[];
};

export function LoadProfileService() {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ProfileData>('http://localhost:3000/profile.json');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
