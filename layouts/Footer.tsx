import Image from "next/image";
import footersymbol from "../public/footersymbolpic/Footer symbol.png";
import Logo from "@/components/ui/logo/Logo";
import LogoBlue from "../public/logopic/LogoBlue.svg";
import instagram from "../public/socialicons/instagram.png";

function Footer() {
  return (
    <footer>
      <div className="max-xl:gap-y-8 xl:gap-y-0 grid xl:grid-cols-[2fr_1fr] max-xl:grid-rows-2">
        <div className="flex flex-col gap-8">
          <Logo
            width={148}
            height={48}
            variant={LogoBlue}
            style="max-xl:hidden"
          />

          <Logo
            width={96}
            height={32}
            variant={LogoBlue}
            style="min-xl:hidden"
          />

          <span className="text-body-md text-gray-7 xl:text-body-xl">
            تلفن پشتیبانی: 44672261_021
          </span>

          <span className="text-body-md text-gray-7 xl:text-body-xl">
            آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس
            غربی.
          </span>

          <Image src={footersymbol} alt="footersymbol" />

          <div className="flex items-center gap-8">
            <span className="text-body-md xl:text-body-xl">
              ما را در اینستاگرام دنبال کنید
            </span>
            <Image className="w-10 h-10" src={instagram} alt="instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full text-gray-7">
          <span className="text-heading-5 xl:text-heading-4">
            لینک های مفید
          </span>
          <ul className="flex flex-col gap-4">
            <li className="text-body-md xl:text-body-xl">سوالات متداول</li>
            <li className="text-body-md xl:text-body-xl">قوانین و مقررات</li>
            <li className="text-body-md xl:text-body-xl">حریم خصوصی</li>
            <li className="text-body-md xl:text-body-xl">تماس با ما</li>
            <li className="text-body-md xl:text-body-xl">درباره ما</li>
          </ul>
        </div>
      </div>

      <div className="flex xl:mt-8!">
        <span className="w-full text-body-md text-gray-7 xl:text-body-xl text-center">
          کلیه حقوق مادی و معنوی متعلق به بیلتیو میباشد &copy;
        </span>
      </div>
    </footer>
  );
}

export default Footer;
