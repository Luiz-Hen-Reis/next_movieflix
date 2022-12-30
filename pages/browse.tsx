import Head from "next/head";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { useApi } from "../libs/useApi";
import { ApiData } from "../types/ApiData";

interface Props {
  popularMovies: ApiData;
  topRatedMovies: ApiData;
  releasedThisMonth: ApiData;
}

const Browse = (data: Props) => {

  return (
    <>
      <Head>
        <title>Home | Movieflix</title>
      </Head>
      <Header />
      <Slider data={data.popularMovies} title={'Trending Now'} />
      <Slider data={data.topRatedMovies} title={'Top Rated'} />
      <Slider data={data.releasedThisMonth} title={'Release This Month'} />
    </>
  );
};

export default Browse;

export const getServerSideProps = async () => {
  const api = useApi();
  const moviesUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const discoverUrl = process.env.NEXT_PUBLICK_API_DISCOVER_URL;
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();

  const currentDate = `${thisYear}-${thisMonth}`;

  const topRatedUrl = `${moviesUrl}/top_rated?${apiKey}`;
  const popularMoviesUrl = `${discoverUrl}?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false`;
  const releasedThisMonthUrl =`${discoverUrl}?${apiKey}&language=en-US&&primary_release_date.lte=${currentDate}&include_adult=false`

  const topRatedMovies = await api.getMoviesList(topRatedUrl);
  const popularMovies = await api.getMoviesList(popularMoviesUrl);
  const releasedThisMonth = await api.getMoviesList(releasedThisMonthUrl);

  return {
    props: {
      topRatedMovies,
      popularMovies,
      releasedThisMonth
    },
  };
};
