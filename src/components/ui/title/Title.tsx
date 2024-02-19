import { globalFont } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  classname?: string;
}

export const Title = ({ title, subtitle, classname }: Props) => {
  return (
    <div className={`mt-3 ${classname}`}>
      <h1 className={`${globalFont.className} antialiased text-3xl font-semibold my-5`}>{title}</h1>
      {subtitle && <h3 className="text-xl mb-2">{subtitle}</h3>}
    </div>
  );
};
