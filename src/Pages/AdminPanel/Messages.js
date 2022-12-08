import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import MessageCard from './MessageCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react';

const Messages = () => {
    const [animation, setAnimation] = useState(true)
    const { data: messages, isLoading } = useQuery({
        queryKey: ['messages'],
        queryFn: async () => {
            const res = await fetch(' https://shop-now-server.vercel.app/message')
            const data = await res.json()
            return data

        }
    })
  
    return (
        <div>
            {
                isLoading ?
                    <>
                        <div className='grid  gap-5  grid-cols-1 md:grid-cols-2'>
                            <SkeletonTheme baseColor="#efefef" highlightColor="#ffe8cc">
                                <p>
                            <Skeleton   height={140} />
                                </p>
                            </SkeletonTheme>
                            <SkeletonTheme baseColor="#efefef" highlightColor="#ffe8cc">
                                <p>
                            <Skeleton   height={140} />
                                </p>
                            </SkeletonTheme>
                            <SkeletonTheme baseColor="#efefef" highlightColor="#ffe8cc">
                                <p>
                            <Skeleton   height={140} />
                                </p>
                            </SkeletonTheme>
                            <SkeletonTheme baseColor="#efefef" highlightColor="#ffe8cc">
                                <p>
                            <Skeleton   height={140} />
                                </p>
                            </SkeletonTheme>
                        </div>
                       

                    </>
                    :

                    <>

                        <div className='grid  gap-5  grid-cols-1 md:grid-cols-2'>
                            {
                                messages.map(message => <MessageCard
                                    key={message._id}
                                    message={message}
                                ></MessageCard>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default Messages;