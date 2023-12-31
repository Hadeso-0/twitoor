import type { FC } from 'react';
import { FaTwitter } from 'react-icons/fa'

const Hero: FC = () => {
  return (
    <div className="bg-hero divider py-12" data-testid="home-hero">
      <div className="mx-auto flex w-full max-w-screen-xl items-stretch px-5 py-8 text-center sm:py-12 sm:text-left">
        <div className="flex-1 space-y-3">
          <div className="font-serif text-2xl font-bold sm:text-4xl flex gap-2">
            Welcome to <span className='font-extrabold text-purple-700'>{'Twitoor '}</span> <FaTwitter className='text-3xl mt-1.5 text-purple-600' /> 
          </div>
          <div className="leading-5 text-gray-600 dark:text-gray-300 font-medium w-9/12">
              Twitoor is a decentralized, and permissionless social media app built on <span className='font-bold hover:text-purple-600 cursor-pointer'>Lens Protocol 🌿</span>
          </div>
        </div>
        <div className="hidden w-full flex-1 shrink-0 sm:block" />
      </div>
    </div>
  );
};

export default Hero;