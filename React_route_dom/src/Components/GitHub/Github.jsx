import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Github() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/vikrant48')
            .then(resp => resp.json())
            .then(resp => {
                // console.log(resp)
                setData(resp)
            })

    }, [])
    return (
        <div class="bg-white flex items-center justify-center min-screen">
            <div class="max-w-sm bg-gray-200 shadow-md rounded-lg p-6">

                <div class="flex justify-center mb-4">
                    <img src={data.avatar_url} alt="Vikrant Chauhan" class="w-24 h-24 rounded-full object-cover border-4 border-gray-200" />
                </div>

                <h2 class="text-2xl font-bold text-gray-800 mb-2 text-center">{data.name}</h2>
                <p class="text-sm text-gray-600 mb-4 text-center">{data.bio}</p>
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span class="font-medium text-gray-700">Location:</span>
                        <span class="text-gray-800">{data.location}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="font-medium text-gray-700">Public Repos:</span>
                        <span class="text-gray-800">{data.public_repos}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="font-medium text-gray-700">Followers:</span>
                        <span class="text-gray-800">{data.followers}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="font-medium text-gray-700">Following:</span>
                        <span class="text-gray-800">{data.following}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github