import Image from 'next/image'

const ImgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDl6MvpQusmg4Go576IVXS77IEFXcOrscKTLIcYhqMnRE8Y1HWiulLxh2dhahrb-AxF5fqHa2Qo0O1i2pCtHYdwYk7JOXWRr2Pkkyig9ZHrw6BxLMBZZeiME6Sqwle7OcQpNhvB1y8c5w-9bkiEl4uZkR33duWpus31-Ph5QeVscuYC0XQjh6hlQqQM5_eVZy4HaG4LsgvGE0ijHpfdmsqpnCxOMFKUFlcEh5afNZakXPpqHj-pIB_D"

const Archive = () => {
  return (
    <div className='flex justify-around items-center h-[500px] bg-black/40'>
      <div>
        <h1>THE ARCHIVE SALE</h1>
        <p>Discover pieces from our previous collections at exceptional value. A curated selection of timeless silhouettes.</p>
        <button>Enter Archive</button>
      </div>
      <div>
        <Image src={ImgUrl}
        alt='Image'
        height={300}
        width={300}
        className="object-cover"
        >

        </Image>
      </div>
    </div>
  )
}

export default Archive
