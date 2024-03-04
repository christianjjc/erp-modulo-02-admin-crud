import { globalFont } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  classname?: string;
}

export const Title = ({ title, subtitle, classname }: Props) => {
  return (
    <>
      <div className={`bg-primary-color rounded-md ${classname} `}>
        <h1 className={`${globalFont.className} antialiased text-3xl font-semibold text-[#FFFFFF] py-2 px-4`}>{title}</h1>
      </div>
      <div className="mt-6 mb-3">{subtitle && <h2 className="text-2xl text-secondary-color">{subtitle}</h2>}</div>
    </>
  );
};
