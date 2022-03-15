import Image from 'next/image'

const Loader = () => {
    return (
    <Image
        src="/loading.svg"
        alt="Picture of the author"
        width={150}
        height={150}
    />);
}

export default Loader;