'use client'

export default function Error({ error, unstable_retry }) {
  return (
    <div className="flex flex-col justify-center items-center text-2xl text-red-500 mt-40">
      <h2>Something went wrong!</h2>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  )
}