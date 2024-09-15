import axios from "axios";
import { useEffect, useState } from "react";

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
        const response = await axios.get<ProfileData>(
          "https://gist.githubusercontent.com/zinthawtun/13ced6340b63fc36ad8078c8c6ee1029/raw/de64d46686efe666d6d6390f849e78ae6f0e46b8/sea-salt-ice-cream-profile.json"
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}