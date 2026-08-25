import Image from 'next/image'

const ImgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDl6MvpQusmg4Go576IVXS77IEFXcOrscKTLIcYhqMnRE8Y1HWiulLxh2dhahrb-AxF5fqHa2Qo0O1i2pCtHYdwYk7JOXWRr2Pkkyig9ZHrw6BxLMBZZeiME6Sqwle7OcQpNhvB1y8c5w-9bkiEl4uZkR33duWpus31-Ph5QeVscuYC0XQjh6hlQqQM5_eVZy4HaG4LsgvGE0ijHpfdmsqpnCxOMFKUFlcEh5afNZakXPpqHj-pIB_D"

const Archive = () => {
  return (
    <div>
      <div>

      </div>
      <div>
        <Image src={ImgUrl}
        alt='Image'
        height={300}
        width={300}
        className="h-[320px] w-full object-cover"
        >

        </Image>
      </div>
    </div>
  )
}

export default Archive
