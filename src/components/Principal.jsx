import Image from "next/image";
import React from "react";
import Header from "../components/Header";

export default function Principal() {

    return (
        <div>
            <div className="table-fixed">
            <Header></Header>
            </div>
            <div class='from-stone-400 via-stone-700 to-stone-900 bg-gradient-to-br p-10'>
                <div class='flex rounded-full justify-center p-8 mx-auto bg-white shadow-xl w-fit'>
                    <Image className="rounded-full justify-center align-middle items-center" width={300} height={300} alt="Minha Foto" src="/img.png"></Image>
                </div>
            </div>
        </div>
    )
}
