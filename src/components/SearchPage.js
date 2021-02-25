import React, {useState} from "react";
import "components/SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "components/SearchResult";

const SearchPage = (props) => {
  const {location : {numOfPeople, startDate, endDate}} = props;
  const numberOfGuest = parseInt(numOfPeople);
  const [defaultDays, SetDefaultDays] = useState(1);
  console.log(defaultDays)

  let start, end, totalNights;

  if(startDate !== undefined && endDate !== undefined) {
      start = `${startDate.getMonth() + 1}/${startDate.getDate()}`;
      end = `${endDate.getMonth() + 1}/${endDate.getDate()}`;

      const diff_inTime=Math.abs(endDate.getTime()-startDate.getTime());
      totalNights = diff_inTime / (1000 * 3600 * 24);
  }


  return (
    <div className="searhPage">
      <div className="searchPage__info">
        <p>{startDate && endDate ? `62 stays · ${start} to ${end} · ${totalNights < 1 ? totalNights + " Night" : totalNights + " Nights"} · ${numberOfGuest} Guests` : `62 stays · 2 Guests`} </p>
        <h1>Stay Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place </Button>
        <Button variant="outlined">Price </Button>
        <Button variant="outlined">More Filters </Button>
        <SearchResult
          img="https://a0.muscache.com/im/pictures/971a0f6b-ff3e-4be3-8bb4-b0fb1a88aae8.jpg?im_w=720"
          title="DeBary House"
          location="Private room in DeBary"
          description={numberOfGuest > 2 ? `${numberOfGuest} guests · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine` : `2 guests · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine`} 
          star={4.73}
          price="$30"
          total={startDate && endDate && totalNights > 1 ? totalNights * 30 : defaultDays * 30}
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/e429e542-f429-4b4c-b8c7-b1050b9cfa36.jpg?im_w=720"
          title="Waterfront, fishing and horses"
          location="Private room in Umatilla"
          description={numberOfGuest > 2 ? `${numberOfGuest} guests · Studio · 1 bed · 1 private bath · Wifi · Pool · Kitchen` : `2 guests · Studio · 1 bed · 1 private bath · Wifi · Pool · Kitchen`}
          star={4.95}
          price="$110"
          total={startDate && endDate && totalNights > 1 ? totalNights * 110 : defaultDays * 110}
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/7bee49db-78b4-4cb2-86f1-7bbb9c9dcf89.jpg?im_w=720"
          title="Beachfront 516 Daytona condotel"
          location="Entire apartment in Daytona Beach"
          description={numberOfGuest > 2 ? `${numberOfGuest} guests · Studio · 2 beds · 1 bath · Pool · Free parking · Wifi` : `2 guests · Studio · 2 beds · 1 bath · Pool · Free parking · Wifi`}
          star={4.52}
          price="$200"
          total={startDate && endDate && totalNights > 1 ? totalNights * 200 : defaultDays * 200}
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/3ad37c61-0bdf-4e33-b6f3-8922ebc8caa8.jpg?im_w=720"
          title="The Hideway Down Under"
          location="Private room in New Symyrna Beach"
          description={numberOfGuest > 2 ? `${numberOfGuest} guests · 1 bedroom · 1 bed · 1 shared bath` : `1 guest · 1 bedroom · 1 bed · 1 shared bath`}
          star={5.0}
          price="$46"
          total={startDate && endDate && totalNights > 1 ? totalNights * 46 : defaultDays * 46}
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/d6823164-5b31-4bfa-abcc-8e74076c7c26.jpg?im_w=720"
          title="Sunny in Central Florida"
          location="Private room in Sanford"
          description={numberOfGuest  > 2 ? `${numberOfGuest} guests · Free Parking · Wifi · Air Conditioning · 1 bedroom · 1 bed · 1 shared bath` : `2 guests · Free Parking · Wifi · Air Conditioning · 1 bedroom · 1 bed · 1 shared bath`}
          star={5.0}
          price="$47"
          total={startDate && endDate && totalNights > 1 ? totalNights * 47 : defaultDays * 47}
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/miso/Hosting-46712342/original/8320634d-7f35-41e1-9b27-9bf1bdaec2a3.jpeg?im_w=720"
          title="The Blue Aztec @ Downtown Sanford"
          location="Private room in Sanford"
          description={numberOfGuest > 2 ? `${numberOfGuest} guests · Wifi · Air Conditioning · 1 bedroom · 2 beds · 1 bath` : `2 guests · Wifi · Air Conditioning · 1 bedroom · 2 beds · 1 bath`}
          star={5.0}
          price="$160"
          total={startDate && endDate && totalNights > 1 ? totalNights * 160 : defaultDays * 160}
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/fb3f3e5e-7a6e-4af4-a009-6cf1e69fdcc2.jpg?im_w=720"
          title="The Mount Dora Escape-A Tiny House"
          location="Tiny house in Mount Dora"
          description={numberOfGuest > 2 ? `${numberOfGuest} guests · Wifi · Air Conditioning · 1 bed · 1 bath` : `2 guests · Wifi · Air Conditioning · 1 bed · 1 bath`}
          star={4.99}
          price="$138"
          total={startDate && endDate && totalNights > 1 ? totalNights * 138 :  defaultDays * 138}
        />
      </div>
    </div>
  );
};

export default SearchPage;
