import Image from "next/image";
import React from "react";

export default function Corpo() {

    return (
        <div class='flex items-center justify-center min-h-screen from-stone-400 via-stone-700 to-stone-900 bg-gradient-to-br'>
            <div class='rounded-full w-full max-w-lg px-10 py-8 mx-auto bg-white shadow-xl'>
                <div class='max-w-md mx-auto space-y-6'>
                    <Image className="rounded-full justify-center align-middle items-center" width={500} height={500} alt="Minha Foto" src="/img.png"></Image>
                </div>
            </div>
        </div>
    )
}
