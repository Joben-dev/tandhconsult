
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
                className={classNames(styles.title, styles.solutionsTitle, 'wow', 'animate__animated', 'animate__fadeInLeft')}
                data-wow-delay="0.4s"
            >
                <span>Cryptocurrency Investigations and Regulatory Compliance</span>
            </h2>

            <div
                className={classNames(styles.disputeInfo, 'wow', 'animate__animated', 'animate__fadeInLeft')}
                data-wow-delay="0.6s"
            >
            <p>
                Greyzone Consulting excels in cryptocurrency compliance and investigation services. We aid businesses, individuals, and law enforcement agencies navigate the complex digital asset landscape. Our expertise lies in probing digital asset cases, tracing cryptocurrencies, and analyzing blockchain transactions. We identify, locate, and trace funds involved in hacks, frauds, and scams across blockchain networks. Count on us to connect digital funds to real-world entities and obtain crucial evidence for your case.
            </p>
            </div>
            
            <div className={classNames(styles.disputeWrapper)}>
    {[
    {
        delay: "0.6s",
        href: "/solutions/cryptocurrency-investigation-and-compliance/asset-location-and-tracing-services",
        imgSrc: "https://tandhconsult.com/wp-content/uploads/2024/11/workflow-process-improve-productivity-write-chalkb-2024-10-12-01-52-37-utc-768x512.jpg",
        name: "Asset Location and Tracing Services",
    },
    {
        delay: "0.7s",
        href: "/solutions/cryptocurrency-investigation-and-compliance/cryptocurrency-transaction-risk-analysis",
        imgSrc: "https://tandhconsult.com/wp-content/uploads/2024/09/multiracial-female-brokers-share-knowledge-about-f-2023-11-27-05-15-38-utc-768x512.jpg",
        name: "Cryptocurrency Transaction Risk Analysis",
    },
    {
        delay: "0.8s",
        href: "/solutions/cryptocurrency-investigation-and-compliance/expert-cryptocurrency-witness-services",
        imgSrc: "https://tandhconsult.com/wp-content/uploads/2021/07/saul-bucio-p5yn73kruaa-unsplash-1-768x510.jpg",
        name: "Expert Cryptocurrency Witness Services",
    },
    {
        delay: "0.9s",
        href: "/solutions/cryptocurrency-investigation-and-compliance/business-focused-cryptocurrency-intelligence-report",
        imgSrc: "https://tandhconsult.com/wp-content/uploads/2021/07/thought-catalog-bj8u389a9n8-unsplash-768x512.jpg",
        name: "Business-Focused Cryptocurrency Intelligence Report",
    },
    {
        delay: "1.0s",
        href: "/solutions/cryptocurrency-investigation-and-compliance/in-depth-cryptocurrency-investigation-services",
        imgSrc: "https://tandhconsult.com/wp-content/uploads/2021/07/digital-crime-by-an-anonymous-hacker-2022-12-16-00-45-57-utc-768x567.jpg",
        name: "In-Depth Cryptocurrency Investigation Services",
    },
    {
        delay: "1.1s",
        href: "/solutions/cryptocurrency-investigation-and-compliance/general-cryptocurrency-intelligence-reports",
        imgSrc: "https://tandhconsult.com/wp-content/uploads/2021/08/photo-1579226905180-636b76d96082-770x460-768x459.jpg",
        name: "General Cryptocurrency Intelligence Reports",
    },
    {
        delay: "1.2s",
        href: "/solutions/cryptocurrency-investigation-and-compliance/support-for-cryptocurrency-data-collection",
        imgSrc: "https://tandhconsult.com/wp-content/uploads/2021/07/online-study-768x513.jpeg",
        name: "Support for Cryptocurrency Data Collection",
    }
    ]
    .map((item, idx) => (
                    <ImageBox image={item.imgSrc} name={item.name} size="" key={idx}  href={item.href} style={{ maxWidth: "100%", height: "100%" }}  more={true} />
                ))}
            </div>

            <h2
                className={classNames(styles.title, styles.disputeSubtitle, 'wow', 'animate__animated', 'animate__fadeInUp')}
            >
                <span>Benefits of working with us</span>
            </h2>

            <div
                className={classNames(styles.disputeSubinfo, 'wow', 'animate__animated', 'animate__fadeInUp')}
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
                    className={classNames(styles.abt_explore_item, 'wow', 'animate__animated',  'animate__fadeInUp')}
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
