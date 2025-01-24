
import classNames from 'classnames';
import styles from './style.module.scss';
import ImageBox from '../../Components/Reusable/ImageBox/index'
import Consult from '../../Components/Reusable/Form/Consult'
const index = () => {
  return (
    <>
        <section className={classNames(styles.solutions)} id="solutions">
            <div className={classNames(styles.container)}>
            <h2
                className={classNames(styles.title, styles.solutionsTitle, 'wow', 'animate_animated', 'animate__fadeInLeft')}
                data-wow-delay="0.4s"
            >
                <span>Investigations and Disputes</span>
            </h2>

            <div
                className={classNames(styles.disputeInfo, 'wow', 'animate_animated', 'animate__fadeInLeft')}
                data-wow-delay="0.6s"
            >
                <p>
                T&amp;H Consulting’s Investigations and Disputes solutions help
                clients manage complex demands with expert analysis, advice, and
                intelligence in intricate investigations and litigation. Our team
                combines in-depth investigative experience with cutting-edge
                technology to deliver actionable intelligence, enabling clients
                to mitigate risks and make informed decisions.
                </p>
            </div>
            <div className={classNames(styles.disputeWrapper)}>
                {[
                {
                    delay: "0.1s",
                    href: "/solutions/investigations-and-disputes/due-diligence-services/",
                    imgSrc:
                    "https://tandhconsult.com/wp-content/uploads/2023/06/arlington-research-kz8nhvg_tgi-unsplash-768x513.jpg",
                    name: "Due Diligence Services",
                },
                {
                    delay: "0.2s",
                    href: "/solutions/investigations-and-disputes/dispute-settlement-premium-package/",
                    imgSrc:
                    "https://tandhconsult.com/wp-content/uploads/2021/06/romain-dancre-doplsdelx7e-unsplash.jpg",
                    name: "Dispute Settlement “Premium Package”",
                },
                {
                    delay: "0.3s",
                    href: "/solutions/investigations-and-disputes/dispute-settlement-optimal-package/",
                    imgSrc:
                    "https://tandhconsult.com/wp-content/uploads/2021/06/gabrielle-henderson-hjckknwcxxq-unsplash-768x512.jpg",
                    name: "Dispute Settlement “Optimal Package”",
                },
                {
                    delay: "0.4s",
                    href: "/solutions/investigations-and-disputes/dispute-settlement-special-package/",
                    imgSrc:
                    "https://tandhconsult.com/wp-content/uploads/2021/06/canva-boss-dictating-to-assistant-at-office-768x439.jpg",
                    name: "Dispute Settlement “Special Package”",
                },
                {
                    delay: "0.5s",
                    href: "/solutions/investigations-and-disputes/dispute-settlement-basic-package/",
                    imgSrc:
                    "https://tandhconsult.com/wp-content/uploads/2021/06/beatriz-perez-moya-xn4t2pvuugk-unsplash-768x417.jpg",
                    name: "Dispute Settlement “Basic Package”",
                },
                ].map((item, idx) => (
                    <ImageBox image={item.imgSrc} name={item.name} key={idx} size="" href={item.href}  style={{ maxWidth: "100%", height: "100%" }}  more={true} />
                ))}
            </div>

            <h2
                className={classNames(styles.title, styles.disputeSubtitle, 'wow', 'animate_animated', 'animate__fadeInUp')}
            >
                <span>Benefits of working with us</span>
            </h2>

            <div
                className={classNames(styles.disputeSubinfo, 'wow', 'animate_animated', 'animate__fadeInUp')}
                data-wow-delay="0.2s"
            >
                {[
                "“Highly qualified staff”, our staff that has been working with cases of individuals and businesses on the daily basis for many years now, therefore, it enables them to swiftly understand and identify their needs and give offer them tailor-made solutions.",
                "Besides, the certifications of our staff provide with necessary assurance and surety that you are in good hands and persons that you are dealing with are certified professionals with a proven track record and excellent reputation which in most cases is paramount.",
                "Professional certifications can also help give your independent business a solid foundation. The advanced training, information, and knowledge you gain from specialized coursework can provide you with up-to-date tools and technical strategies that will serve to guide and direct you in the execution of your projects, allowing you to manage all aspects of your work more effectively.",
                "In order to increase earning potential, solving the complex blockchain problems and investigating the prompt ways with the industry-leading tool is a huge asset, let alone it being the trend of the world that we live in.",
                "The biggest challenge for the majority of people is the understanding of the crypto world and its dynamics, just like any new major adaptation it will take its own time, and thereby organizations and individuals are pacing up to adapt and partake in the revolutionary transformation of cryptocurrencies in order to stay updated and meet current demands of the market.",
                ].map((text, index) => (
                <p key={index}>{text}</p>
                ))}
            </div>

            <div className={classNames(styles.abt_explore)}>
                {[
                {
                    icon:
                    "https://tandhconsult.com/wp-content/uploads/2021/05/time-management.svg",
                    name: "Expert Help",
                    pos: "You can now get expert help across a wide range of areas – and help is at hand as soon as you need it.",
                },
                {
                    icon: "https://tandhconsult.com/wp-content/uploads/2021/05/help.svg",
                    name: "Establish Professional Credibility",
                    pos: "A relationship built on trust and honesty can strengthen any business.",
                },
                {
                    icon: "https://tandhconsult.com/wp-content/uploads/2021/05/help.svg",
                    name: "Faster, Easier Implementation",
                    pos: "Faster, easier and more cost-effective than any other provider.",
                },
                {
                    icon: "https://tandhconsult.com/wp-content/uploads/2021/05/shield.svg",
                    name: "Build Trust",
                    pos: "We are here for you – because we are Built to Care.",
                },
                ].map((item, index) => (
                <div
                    key={index}
                    className={classNames(styles.abt_explore_item, 'wow', 'animate_animated', 'animate__fadeInUp')}
                    data-wow-delay="0.1s"
                >
                    <i
                    className={classNames(styles.disputeIcon)}
                    style={{
                        width: '56px',
                        height: '56px',
                        // background: 'linear-gradient(to right, #32509d 0%, #70abdc 100%)',
                        display: 'inline-block',
                        zIndex: "3",
                        maskImage: `url(${item.icon})`,
                        background: `url(${item.icon})`,
                    }}
                    ></i>
                    <div className={classNames(styles.disputeBenefContent)}>
                    <span className={classNames(styles.abt_explore_name)}>{item.name}</span>
                    <span className={classNames(styles.disputeBenefPos)}>{item.pos}</span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
        <Consult></Consult>
    </>
  );
};

export default index;
