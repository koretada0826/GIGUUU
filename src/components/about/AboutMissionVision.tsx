import SectionLabel from './SectionLabel';
import Mark from './Mark';
import CloverField from '@/components/CloverField';

function Statement({
  index,
  en,
  ja,
  headline,
  body,
  image,
  reverse = false,
  dotClass,
  numberClass,
}: {
  index: string;
  en: string;
  ja: string;
  headline: React.ReactNode;
  body: React.ReactNode;
  image: string;
  reverse?: boolean;
  dotClass: string;
  numberClass: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Image */}
      <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
        <div className="group relative w-full aspect-[5/4] overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover anim-zoom-slow" />
          <div className="sheen" />
        </div>
      </div>

      {/* Text */}
      <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
        <SectionLabel index={index} en={en} ja={ja} dotClass={dotClass} numberClass={numberClass} />
        <h3 className="mt-9 md:mt-11 text-[30px] md:text-[46px] font-extrabold leading-[1.4] tracking-[-0.01em] text-gray-900">
          {headline}
        </h3>
        <div className="mt-8 md:mt-10 space-y-5 text-[15px] md:text-[16px] leading-[2.1] text-gray-600 max-w-[520px]">
          {body}
        </div>
      </div>
    </div>
  );
}

export default function AboutMissionVision() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#f7f8f8] px-6 md:px-16 lg:px-[120px] py-24 md:py-36">
      <CloverField />
      <div className="relative max-w-[1280px] mx-auto space-y-24 md:space-y-36">
        <Statement
          index="02"
          en="MISSION"
          ja="私たちの使命"
          dotClass="bg-brand-green"
          numberClass="text-brand-green"
          image="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-2956x2685_v-frms_webp_b3b84400-c269-420b-aa23-d976c653eb7e_small.webp"
          headline={
            <>
              人の可能性を、
              <br />
              AIで<Mark color="bg-brand-green/30">拡張</Mark>する。
            </>
          }
          body={
            <>
              <p>
                AIは、人を奪うものではありません。人が本来やるべき仕事に集中するためにあります。
              </p>
              <p>
                企業には「挑戦したいこと」がある。しかし現実には、人・時間・ノウハウ・コストが足りないという壁が存在します。
              </p>
              <p>
                私たちはAIや自動化技術を活用し、<span className="text-gray-900 font-semibold">その壁を少しでも低くすること</span>を使命としています。
              </p>
            </>
          }
        />

        <Statement
          index="03"
          en="VISION"
          ja="目指す世界"
          reverse
          dotClass="bg-brand-pink"
          numberClass="text-brand-pink"
          image="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-1536x1024_v-fms_webp_5924076e-b4ba-4b5d-9e64-9223cf832c25_small.webp"
          headline={
            <>
              誰もが、
              <br />
              <Mark color="bg-brand-pink/25">挑戦できる</Mark>社会をつくる。
            </>
          }
          body={
            <>
              <p>人材不足。営業不足。採用難。高齢化。日本企業が抱える課題は増え続けています。</p>
              <p>
                本来なら実現できたはずの挑戦。本来なら成長できたはずの企業。本来なら届いたはずのサービス。
              </p>
              <p>
                だからこそ私たちは、AIによって<span className="text-gray-900 font-semibold">企業規模に関係なく挑戦できる社会</span>をつくります。
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
