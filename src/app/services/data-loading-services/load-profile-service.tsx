import { ProfileData } from "@/app/models/profile-data";
import axios from "axios";
import { useEffect, useState } from "react";

export function LoadProfileService() {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ProfileData>(
          "https://gist.githubusercontent.com/zinthawtun/924b7beec19a547a6bf0792f36cd7159/raw/2b661a0ed08c24d283fe890ad3c33d822db6d7d8/sea-salt-ice-cream-theme-profile.json"
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