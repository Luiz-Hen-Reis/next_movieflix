import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { ApiData } from "../../types/ApiData";
import Image from "next/image";
import { Navigation } from "swiper";
import MovieModal from "../MovieModal";
import Link from "next/link";

interface Props {
  data: ApiData;
  title: string;
}

const Slider = ({ data, title }: Props) => {
  const imageUrl = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <Swiper
        className={styles.swiper}
        slidesPerView={4}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {data.results.map((item, index) => (
          <>
            <SwiperSlide className={styles.slide} key={index}>
            <Link href={`/browse?movie=${item.id}`}>
            <Image
              src={`${imageUrl}${item.poster_path}`}
              alt={item.title}
              width={100}
              height={100}
            />
            </Link>
          </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
