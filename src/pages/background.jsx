import { useState, useEffect } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import axios from "axios";

function Background() {
  const [backgroundData, setBackgroundData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch background data when the component mounts
    const fetchBackgroundData = async () => {
      try {
        const response = await axios.get('api/background');
        setBackgroundData(response.data); // Set the fetched data
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError('Error fetching background data'); // Handle error
        setIsLoading(false); // Stop loading even on error
      }
    };

    fetchBackgroundData(); // Call the fetch function
  }, []); // Empty dependency array ensures it runs only once

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
          {isLoading ? (
            // Show skeleton loaders while the data is loading
            [1, 2, 3].map((_, index) => (
              <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
            ))
          ) : backgroundData && backgroundData[0]?.eduCards ? (
            // Render education cards if data is loaded
            backgroundData[0].eduCards.map((data, key) => (
              <Edu_Card key={key} data={data} />
            ))
          ) : (
            // Handle no data case
            <div>No education data available</div>
          )}
        </div>

        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <div className="md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
            {isLoading ? (
              // Show skeleton loaders while the data is loading
              [1, 2, 3].map((_, index) => (
                <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
              ))
            ) : backgroundData && backgroundData[1]?.expCards ? (
              // Render experience cards if data is loaded
              backgroundData[1].expCards.map((data, key) => (
                <Exp_Card key={key} data={data} />
              ))
            ) : (
              // Handle no data case
              <div>No experience data available</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
