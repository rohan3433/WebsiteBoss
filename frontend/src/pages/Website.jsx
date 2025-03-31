import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PharmacyTemplate from "../components/templates/PharmacyTemplate";
import CosmeticsTemplate from "../components/templates/CosmeticsTemplate";
import GroceryTemplate from "../components/templates/GroceryTemplate";
import ClothingTemplate from "../components/templates/ClothingTemplate";
import OthersTemplate from "../components/templates/OthersTemplate";

export default function Website() {
  const { id } = useParams();
  const [website, setWebsite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/websites/${id}`);
        setWebsite(res.data);
      } catch (err) {
        console.error("Error fetching website:", err);
        setError("Failed to load website");
      } finally {
        setLoading(false);
      }
    };

    fetchWebsite();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        {error}
      </div>
    );
  if (!website)
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Website not found
      </div>
    );

  const getPrimaryColor = (theme) => {
    switch (theme) {
      case "blue":
        return "bg-blue-600";
      case "green":
        return "bg-green-600";
      case "red":
        return "bg-red-600";
      default:
        return "bg-blue-600";
    }
  };

  const primaryColor = getPrimaryColor(website.colorTheme);

  
  const renderTemplate = () => {
    switch (website.industryType) {
      case "pharmacy":
        return (
          <PharmacyTemplate website={website} primaryColor={primaryColor} />
        );
      case "cosmetics":
        return (
          <CosmeticsTemplate website={website} primaryColor={primaryColor} />
        );
      case "grocery":
        return (
          <GroceryTemplate website={website} primaryColor={primaryColor} />
        );
      case "clothing":
        return (
          <ClothingTemplate website={website} primaryColor={primaryColor} />
        );
      case "Others":
        return <OthersTemplate website={website} primaryColor={primaryColor} />;
      default:
        return (
          <OthersTemplate website={website} primaryColor={primaryColor} />
        ); 
    }
  };

  return renderTemplate();
}
