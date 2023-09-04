import React from "react";
import "./Benefit.scss";
import Card from "./Cards/Card";

import Envelope from "./envelope.png";
import Seo from "./seo.png";
import Seo1 from "./seo1.png";
import Social from "./social-media.png";
import Search from "./search1.png";
import Plan from "./planning.png";

import Popup from "./Popup/Popup";

export default function Benefit() {
  return (
    <>
      <div className="benefit__main">
        <div className="upper">
          <h2 className="bene__title">會員優惠</h2>
          {/* <p className="bene__subtext">
            Here's a few of the many benefits you will enjoy as an Elite House
            Member
          </p> */}
        </div>
        <div className="lower">
          <Popup
            trigger={
              <Card image={Envelope} subtitle="代办新加坡银行户口及服务" />
            }
          >
            <p>
              尚英社为会员提供实时账户管理和资金转账。该应用使会员可以开设多币种账户，包括人民币支付，有助于更轻松地在不同国
              家进行财务管理，并实现即时跨境外汇和转账。成功申请后，每位客户都将拥有独有的新加坡IBAN国际银行号码，并能够进行
              即时汇款和收款。所有尚英会会员的银行服务都受到新加坡金融管理局高度稳定的银行体系的保障。
            </p>
          </Popup>

          <Popup trigger={<Card image={Seo1} subtitle="Mastercard 扣帐卡" />}>
            <p>
              尚英社的发卡行服务允许客户在多个市场发行实体和虚拟卡，支持各种卡功能，如激活、PIN设置、提醒、交易限额和封锁。
              与钱包和虚拟账户集成，这项服务使客户能够从多个来源为卡片充值，并实时管理支出。
              每张Mastercard借记卡都可以即时扣
              款，并与专属于持卡人的英国IBAN银行账户号码关联。
            </p>
          </Popup>

          <Popup trigger={<Card image={Social} subtitle="国外资产配置" />}>
            <p>
              此外，尚英社还提供投资的信托服务，为寻求优化资产配置策略的会员提供额外的安全保障和信心。尚英社为海外资产配置提
              供全面的渠道，通过与顶级金融服务机构的合作，确保会员获得优质的产品和跨境转账服务。尚英社的金融科技简化了个人在
              不同国家重新配置资产的流程。作为与美元挂钩的稳定币，USDT作为一种可靠高效的跨境交易媒介，消除了传统货币兑换的需
              求，降低了相关费用和延迟。尚英社平台利用区块链技术实现了USDT的无缝安全转账，使个人能够在不同国家投资多样化的资
              产和金融产品。此外，尚英社平台提供了用户友好的界面和即时结算功能，为资产重新配置的流程提供更大的灵活性和控制权。
              这有助于管理金融资产，促进更互联和充满活力的全球金融格局。
            </p>
          </Popup>

          <Popup trigger={<Card image={Seo} subtitle="社交电商服务" />}>
            <p>
              尚英社拥有市场上最先进的社交电商系统，旨在为那些不想开设在线店铺的个人简化支付过程。会员可以轻松地上传产品并生
              成支付链接，然后通过WhatsApp和微信等热门消息应用方便地将链接分享给朋友。
              平台拥有用户友好的界面，确保顺畅的导航体验，同时优先考虑用户的财务和个人信息的安全和隐私，以供消费和交易使用。
              该系统还提供了快速高效的结账过程，降低购物车遗弃率，改善用户体验。该平台进一步便捷地实现跨境支付，使不同国家的卖
              家和买家之间可以无缝交易。后台还提供了有价值的分析和见解，帮助卖家追踪销售绩效，做出明智的业务决策。
            </p>
          </Popup>

          <Popup trigger={<Card image={Search} subtitle="AI世界文旅" />}>
            <p>
              尚英社已与一家领先的国际旅行科技公司合作，为6至8人的团体提供个性化和沉浸式的文化旅行体验，由AI驱动的虚拟导游提
              供支持。
              AI导游根据每位旅客的偏好和历史制定定制行程，确保每次旅行都是独特的。通过为不同兴趣和预算量身定制旅行套
              餐，用户可以轻松策划自己的梦想之旅，并能无限制地体验大多数国家的旅行。平台的先进数据分析提供个性化建议，使每次旅
              行变得非凡。尚英社与当地企业合作，提供独特和真实的体验，捕捉每个目的地的本质。在应用内的AI确保会员实时获得帮助，
              而社交分享功能允许他们记录并激励其他人分享他们的精彩冒险。
            </p>
          </Popup>

          <Popup trigger={<Card image={Plan} subtitle="Web3区块链系统" />}>
            <p>
              尚英社会员可以通过我们的加密货币钱包，享受便捷和安全性，轻松进行加密货币交易、支付和收款。无论他们是想要购买、卖
              出还是交换加密资产，我们的加密货币钱包都提供快速和低成本的交易，最低手续费。
              会员还可以使用我们的加密货币钱包在
              线上或线下支付商品和服务，以及从其他加密账户收款。
              此外，我们的加密货币钱包还可以让会员将法定货币兑换成USDT（与
              美元挂钩的稳定币），以满足他们的日常银行需求。USDT可以作为价值储存、交换媒介或波动对冲工具。通过我们的加密货币钱
              包，尚英社会员可以充分体验传统和数字经济的优势。
            </p>
          </Popup>
        </div>
      </div>
    </>
  );
}
