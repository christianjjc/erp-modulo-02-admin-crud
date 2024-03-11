import { globalFont } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  classname?: string;
}

export const Title = ({ title, subtitle, classname }: Props) => {
  return (
    <>
      <div className={`bg-primary-color  ${classname} `}>
        <h1 className={`${globalFont.className} antialiased text-3xl font-semibold text-[#FFFFFF] py-2 px-4`}>{title}</h1>
      </div>
      <div className="mt-3 mb-3">{subtitle && <h2 className="text-xl text-secondary-color">{subtitle}</h2>}</div>
    </>
  );
};
