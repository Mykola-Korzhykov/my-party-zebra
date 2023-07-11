import { FC } from "react";
import Router from "next/router";
import Image from "next/legacy/image";
import Link from "next/link";

import IServicesItem from "@shared/interfaces/Data/Seasonal/IServicesItem";

import styles from "./Services.module.scss";

type Props = {
  list: IServicesItem[];
};

const ServicesList: FC<Props> = ({ list }) => {
  const colors = ["#F48456", "#D52033", "#A7CCAA"];

  const toOrganize = () => {
    Router.push({ pathname: "/organize" });
    localStorage.setItem("isSeasonal", "true");
    localStorage.removeItem("isDecor");
  };

  return (
    <ul className={styles.list}>
      {list.map(({ title, button, image }, index) => (
        <li className={styles.item} key={index}>
          <div className={styles.image}>
            <Image
              src={image.url}
              blurDataURL={image.url}
              alt={image.alt}
              layout="fill"
            />
          </div>

          <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>

            <button
              className={styles.link}
              onClick={toOrganize}
              style={{ color: colors[index % colors.length] }}
            >
              {button.text}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
