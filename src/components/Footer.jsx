export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 px-6 md:px-16 pt-12 pb-6">
           
            <div className="max-w-7xl mx-auto text-sm leading-relaxed space-y-6">
                <div>
                    <h4 className="text-yellow-500 font-semibold mb-2">Disclaimers:</h4>
                    <p>
                        Nebula Financial Services Ltd does not provide or facilitate business
                        services or transactions to residents of the USA, UAE, North Korea,
                        IRAN, MYANMAR or any other country that may be subject to any
                        international sanctions.
                    </p>
                </div>

                <div>
                    <h4 className="text-yellow-500 font-semibold mb-2">Risk Warning:</h4>
                    <p>
                        The financial products offered via this website include digitals,
                        contracts for difference (CFDs), and other complex derivatives and
                        financial products. Trading options may not be suitable for everyone.
                        Trading CFDs carries a high level of risk since leverage can work both
                        to your advantage and disadvantage.
                    </p>
                    <p className="mt-4">
                        Forex and CFDs are complex instruments and come with a high risk of
                        losing money rapidly due to leverage. 70% of retail investor accounts
                        lose money when forex and CFDs trading with this provider. You should
                        consider whether you can afford to take the high risk of losing your
                        money.
                    </p>
                </div>
            </div>

            <div className="border-t border-gray-700 my-10" />

           
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

                <div>
                    <h5 className="text-yellow-500 font-semibold mb-4">Address</h5>
                    <p className="mb-4">
                        <span className="font-semibold">Registered Address:</span><br />
                        Ground Floor, The Sotheby Building, Rodney Village,
                        Rodney Bay, Gros-Islet, Saint Lucia.<br />
                        Registration Number: 2025-00811
                    </p>
                    <p>
                        <span className="font-semibold">Physical Address:</span><br />
                        2 David Gamrekeli St., Office No. 2, 0160 Tbilisi, Georgia.
                    </p>
                </div>


                <div>
                    <h5 className="text-yellow-500 font-semibold mb-4">Useful Links</h5>
                    <ul className="space-y-2">
                        <li className="hover:text-yellow-600 cursor-pointer">About us</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Trading</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Channel Partner</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Academy</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Tools</li>
                    </ul>
                </div>


                <div>
                    <h5 className="text-yellow-500 font-semibold mb-4">Instruments List</h5>
                    <ul className="space-y-2">
                        <li className="hover:text-yellow-600 cursor-pointer">Forex</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Metals</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Oil Commodities</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Spot Index</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Cryptocurrency</li>
                    </ul>
                </div>


                <div>
                    <h5 className="text-yellow-500 font-semibold mb-4">Other Links</h5>
                    <ul className="space-y-2">
                        <li className="hover:text-yellow-600 cursor-pointer">Economic Calendar</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Market News</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Terms of Use</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-yellow-600 cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
            </div>


            <div className="border-t border-gray-800 mt-10 pt-4 text-center text-xs text-gray-400">
                © Copyright Nebula Financial Services Ltd. All Rights Reserved
            </div>
        </footer>
    );
}
