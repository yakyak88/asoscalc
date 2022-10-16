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
        <footer className="text-center">
            <div className="container-fluid text-dark bg-warning  p-1 ">
                <h5>
                    © 2022 Copyrights belongs to Yakir Daniel
                    <span className="mt-2">
                        <a
                            target={"_blank"}
                            className="  ms-4 text-dark   "
                            href="https:www.linkedin.com/in/yakir-daniel-3209a7244/"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a
                            target={"_blank"}
                            className="   ms-2 text-dark  "
                            href="https://github.com/yakyak88"
                        >
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </span>
                </h5>
            </div>
        </footer>
    );
};

export default Footer;
