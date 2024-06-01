'use client';
import api from '@/app/api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type signInProps = {
  title: string;
  src: string;
  alt: string;
};

function SocialSignIn({ title, src, alt }: signInProps) {
  const router = useRouter();

  const handleClickSignIn = async () => {
    // const url = await api.auth.signUpKakao();
    // const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/users/kakao`;
    // router.push(url);
    // const url = await api.auth.signUpKakao();
    // window.location.href = url;
  };

  return (
    <>
      <button title={title} onClick={handleClickSignIn}>
        <Image src={src} alt={alt} width={400} height={1} />
      </button>
    </>
  );
}

export default SocialSignIn;
