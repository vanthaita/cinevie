export default function CreditCard() {
    return (
        <div className="w-[300px] h-48 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" alt="Credit Card" />
            <div className="w-full px-6 absolute top-6">
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light text-xs">
                            Name
                        </p>
                        <p className="font-medium tracking-wider text-sm">
                            Ta Thai
                        </p>
                    </div>
                    <img className="w-12 h-12" src="https://i.imgur.com/bbPHJVe.png" alt="Logo" />
                </div>
                <div className="pt-1">
                    <p className="font-light text-xs">
                        Card Number
                    </p>
                    <p className="font-medium tracking-widest text-sm">
                        4242 4242 4242 4242
                    </p>
                </div>
                <div className="pt-4 pr-4">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light text-xs">
                                Valid
                            </p>
                            <p className="font-medium tracking-wider text-xs">
                                11/15
                            </p>
                        </div>
                        <div className="">
                            <p className="font-light text-xs">
                                Expiry
                            </p>
                            <p className="font-medium tracking-wider text-xs">
                                12/34
                            </p>
                        </div>
                        <div className="">
                            <p className="font-light text-xs">
                                CVV
                            </p>
                            <p className="font-bold tracking-wider text-xs">
                                ...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
