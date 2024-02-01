import Input from "@/components/Inputs/Input";
import { ChangeEvent, useState } from "react";

import styles from "./styles.module.scss";

const Dadosiniciais = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [tiktok, setTikTok] = useState("");

  const handleFacebookChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFacebook(e.target.value);
    localStorage.setItem("storeFacebook", e.target.value);
  };

  const handleInstagramChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInstagram(e.target.value);
    localStorage.setItem("storeInstagram", e.target.value);
  };

  const handleTwitterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTwitter(e.target.value);
    localStorage.setItem("storeTwitter", e.target.value);
  };

  const handleYoutubeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutube(e.target.value);
    localStorage.setItem("storeYoutube", e.target.value);
  };

  const handleTikTokChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTikTok(e.target.value);
    localStorage.setItem("storeTikTok", e.target.value);
  };

  return (
    <div className={styles["input-container"]}>
      <div className={styles["input-group"]}>
        <Input
          label="Facebook"
          placeholder="https://facebook.com"
          value={facebook}
          onChange={handleFacebookChange}
        />
        <Input
          label="Instagram"
          placeholder="https://instagram.com"
          value={instagram}
          onChange={handleInstagramChange}
        />
        <Input
          label="Twitter"
          placeholder="https://twitter.com"
          value={twitter}
          onChange={handleTwitterChange}
        />
        <Input
          label="Youtube"
          placeholder="https://youtube.com"
          value={youtube}
          onChange={handleYoutubeChange}
        />
        <Input
          label="TikTok"
          placeholder="https://tiktok.com"
          value={tiktok}
          onChange={handleTikTokChange}
        />
      </div>
    </div>
  );
};

export default Dadosiniciais;
