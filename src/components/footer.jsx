const Footer = () => {
    return (
        // <div className="container-fluid">
        //     <footer className="text-center text-light mt-auto mb-3 bg-warning">
        //         <div className="row">
        //             <div className="text-center text-dark p-3 col-3">
        //                 © 2022 Copyrights belongs to Yakir Daniel
        //                 <div className="col-3">
        //                     <a
        //                         target={"_blank"}
        //                         className="text-dark"
        //                         href="https://www.linkedin.com/in/yakir-daniel-3209a7244/"
        //                     >
        //                         <ion-icon name="logo-linkedin"></ion-icon>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </footer>
        // </div>
        <footer className="text-center mb-3">
            <div className="container-fluid text-light  p-1 ">
                <p className="fs-5 text-nowrap">
                    © 2022 Made by Yakir Daniel
                    <span className="mt-2">
                        <a
                            target={"_blank"}
                            className="  ms-3 "
                            href="https://linkedin.com/in/yakir-daniel/"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a
                            target={"_blank"}
                            className="   ms-2 text-warning  "
                            href="https://github.com/yakyak88"
                        >
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
