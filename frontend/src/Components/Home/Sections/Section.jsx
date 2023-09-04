import React from "react";

import "./Section.scss";
import Image from "./section-image.jpg";
import KYC from "./kyc.jpg";
import Money from "./money.jpg";
import Section1 from "./SubSection/Section1";
import Section2 from "./SubSection/Section2";
import Section3 from "./SubSection/Section3";

export default function Section() {
  return (
    <>
      <div className="section__container">
        <div className="this__text">
          <h2 className="this__title">我们解决三大问题</h2>
          {/* <p className="section__subtext">Demo SubText</p> */}
        </div>
        <div className="section__content">
          <Section1
            sectionTitle="跨境支付"
            sectionContext="跨境支付通常面临效率低的问题，导致交易变得缓慢且成本高昂。传统的支付方式涉及复杂的中介机构网络，导致交易处理时间延长以及更高的费用。这些中介机构通
            常需要手动干预，导致错误和差错进一步延长支付流程。此外，不同国家之间的货币汇率和监管要求的差异增加了跨境支付的复杂性和成本。因此，企业和个人常常面临
            收款延误，高昂的交易费用也会严重影响他们的盈利。这些挑战突显了对更高效和低成本的跨境支付解决方案的迫切需求，以实现实时转账和降低费用。"
            sectionImage={Money}
          />
          <Section2
            sectionTitle="跨境KYC问题"
            sectionContext="跨境客户的“了解您的客户”（KYC）流程也面临独特的挑战。由于不同国家的法规和监管要求的差异，进行跨境业务的金融机构需要更加复杂的KYC程序。这可能包括获取
            并验证客户的国际身份文件、地址证明、税务文件以及其他相关信息。此外，语言、文化和时区差异可能导致通信障碍，影响到KYC的顺利进行。对于金融机构来说，确保
            在遵循国际合规标准的同时，能够高效地执行跨境KYC是至关重要的。这有助于减少潜在风险，确保合规性，同时为全球客户提供无缝的金融服务体验。因此，跨境KYC
            的简化和优化对于金融行业的国际扩展和客户信任都具有重要意义。"
            sectionImage={KYC}
          />
          <Section1
            sectionTitle="过度交织金融产品"
            sectionContext="金融领域中信托与投资产品的过度交织可能带来复杂的挑战。当信托与投资产品过于交织，存在将不同金融功能界限模糊化的风险，从而对投资者造成困惑。这可能导
            致利益冲突，削弱金融行业所需的透明度和问责制。监管机构通常强调保持信托与投资产品之间清晰的区分，以确保适当管理风险并维护客户利益的安全。在提供创新
            金融解决方案的同时，保持透明度和诚信之间的平衡是建立信任和维持健康金融生态系统的关键。"
            sectionImage={Image}
          />
          {/* <Section2 />
          <Section3 /> */}
        </div>
      </div>
    </>
  );
}
