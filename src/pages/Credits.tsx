interface CreditsProps {
  t: any
}

// Cambia el linkClass para solo color morado, sin subrayado
const linkClass = "text-primary no-underline hover:text-primary-dark"

const Credits = ({ t }: CreditsProps) => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">{t.creditsTitulo}</h2>
      <p className="mb-8">{t.creditsDescripcion}</p>

      <h3 className="text-xl font-semibold mt-8 mb-2">License</h3>
      <p>This project is licensed under the MIT License.</p>
      <p>Mockup. Photo by <a href="https://unsplash.com/@tuqa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tuqa Nabi</a> on <a href="https://unsplash.com/photos/a-person-pouring-olive-oil-on-a-pizza-AgiUMlpPz6M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </p>
      
      <p>
        Icons by{" "}
        <a
          href="https://heroicons.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Heroicons
        </a>
        . Licensed under the{" "}
        <a
          href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          MIT License
        </a>
        .
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2">Pizzas</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Photo by <a href="https://unsplash.com/@aurel__lens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Aurélien Lemasson-Théobald</a> on <a href="https://unsplash.com/photos/round-cooked-pizza-x00CzBt4Dfk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@amir_v_ali?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>amirali mirhashemian</a> on <a href="https://unsplash.com/photos/pizza-with-green-leaves-and-red-sauce-XtLPfib7OuM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@louishansel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Louis Hansel</a> on <a href="https://unsplash.com/photos/cooked-food-on-round-white-ceramic-plate-cC0_UO1Obg4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@alanaktion?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Alan Hardman</a> on <a href="https://unsplash.com/photos/pepperoni-pizza-SU1LFoeEUkk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@saahilkhatkhate?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Saahil Khatkhate</a> on <a href="https://unsplash.com/photos/pizza-on-brown-wooden-table-kfDsMDyX1K0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@saundiii?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Saundarya Srinivasan</a> on <a href="https://unsplash.com/photos/pizza-with-green-leaves-on-top-60nzTP7_hMQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@mafimo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Masimo Grabar</a> on <a href="https://unsplash.com/photos/baked-pizza-NzHRSLhc6Cs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@jkakaroto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Jonas Kakaroto</a> on <a href="https://unsplash.com/photos/pepperoni-pizz-zlKdLdMREtE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@shouravsheikh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Shourav Sheikh</a> on <a href="https://unsplash.com/photos/pizza-with-pepperoni-and-cheese-on-orange-table-xLfqx4Psf94?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Starters</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Photo by <a href="https://unsplash.com/@hybridstorytellers?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Hybrid Storytellers</a> on <a href="https://unsplash.com/photos/a-table-topped-with-plates-of-food-covered-in-sauce-X0R1I9uh33w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@fotosdealimentos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Fotografía de Alimentos</a> on <a href="https://unsplash.com/photos/a-wooden-table-topped-with-a-plate-of-food-and-chopsticks-WPHDpITnv9Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@omertahacetin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Ömer Taha Çetin</a> on <a href="https://unsplash.com/photos/a-plate-of-food-on-a-wooden-table-3t6uv-c-xys?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@1clickaf?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>1Click</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-plate-of-food-on-a-table-wXYlh6KJqG0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@kedibilla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">jason roy</a> on <a href="https://unsplash.com/photos/a-white-bowl-filled-with-rice-and-nuts-LU2U_p3JMdY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
       </li>
        <li>
          Photo by <a href="https://unsplash.com/@fryfamilyfoodco?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>The Fry Family Food Co.</a> on <a href="https://unsplash.com/photos/a-tray-of-food-with-chopsticks-and-dipping-sauce-enryqd8xpIQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@fayyazkh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>FAYYAZ KH</a> on <a href="https://unsplash.com/photos/vegetable-salad-with-sliced-fried-chicken-in-square-black-bowl-sr18nRcaGT0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@karina_brovchenko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Karina B.</a> on <a href="https://unsplash.com/photos/a-red-bowl-filled-with-meat-and-vegetables-T8EZ42yL8VM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@anil_sharma_india?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Anil Sharma</a> on <a href="https://unsplash.com/photos/a-black-plate-topped-with-fried-food-on-top-of-a-counter-AAOZNDwsTuY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@lingchor?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Lingchor</a> on <a href="https://unsplash.com/photos/brown-cookies-on-black-ceramic-plate-PG5W85aaC4k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Drinks</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Photo by <a href="https://unsplash.com/@whitney_wright?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Whitney Wright</a> on <a href="https://unsplash.com/photos/three-clear-drinking-glasses-filled-with-juice-TgQkxQc-t_U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@lgnwvr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>LOGAN WEAVER | @LGNWVR</a> on <a href="https://unsplash.com/photos/clear-drinking-glass-with-ice-cubes-and-sliced-of-tomato-B9lUt97FL9I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@edwardhowellphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Edward Howell</a> on <a href="https://unsplash.com/photos/clear-wine-glass-with-orange-liquid-jNs7IPdt4HQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@kekse_und_ich?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Svitlana</a> on <a href="https://unsplash.com/photos/a-drink-with-a-garnish-garnish-garnish-garnish-w7dlfv2BWvs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@heftiba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Toa Heftiba</a> on <a href="https://unsplash.com/photos/fruit-juice-cups-beside-yellow-bananas-on-plate-yFLd5x6vfYM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@iamhogir?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Hogir saeed</a> on <a href="https://unsplash.com/photos/a-smoothie-with-kiwi-slices-on-top-of-it-wN01KQVMAIQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@giorgiiremadze?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Giorgi Iremadze</a> on <a href="https://unsplash.com/photos/green-liquid-in-clear-drinking-glass-with-straw-3OV0ft7mG_o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@dibaglin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>ShengGeng Lin</a> on <a href="https://unsplash.com/photos/macro-shot-photography-of-mug-MLxu9kE082c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@dibaglin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>ShengGeng Lin</a> on <a href="https://unsplash.com/photos/sliced-watermelon-with-lemon-on-shot-glass-XoN3v3Ge7EE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@edwardhowellphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Edward Howell</a> on <a href="https://unsplash.com/photos/clear-drinking-glass-with-orange-juice-3wTB8cwSmzE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Desserts</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Photo by <a href="https://unsplash.com/@joyfulcaptures?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Joyful</a> on <a href="https://unsplash.com/photos/strawberry-and-banana-on-white-ceramic-plate-vT5xrj3z1OE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@kobbymendez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Kobby Mendez</a> on <a href="https://unsplash.com/photos/white-ice-cream-on-brown-cookie-idTwDKt2j2o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@kaaficlever?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Shivansh Sethi</a> on <a href="https://unsplash.com/photos/chocolate-cake-with-white-icing-on-white-ceramic-plate-dKT6Q7q2UKs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@emilembunzama?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Emile Mbunzama</a> on <a href="https://unsplash.com/photos/oreo-cookie-sandwiches-dessert-in-short-stem-glass-cLpdEA23Z44?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@maryamo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Maryam Abubakar</a> on <a href="https://unsplash.com/photos/a-cookie-in-a-jar-with-sprinkles-and-sprinkles-IDq4UVk-q1k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@heatherbarnes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Heather Barnes</a> on <a href="https://unsplash.com/photos/macarons-on-table-WbZesfqwR-A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@dilja96?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Diliara Garifullina</a> on <a href="https://unsplash.com/photos/strawberry-and-banana-on-white-ceramic-plate-Gx_vsiMRgzk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@nahimaaparicio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Nahima Aparicio</a> on <a href="https://unsplash.com/photos/a-white-plate-topped-with-a-waffle-covered-in-fruit-nuKLmJUO1Is?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@alexlvrs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Alex Lvrs</a> on <a href="https://unsplash.com/photos/round-sliced-pie-with-cream-aX_ljOOyWJY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@luisanazl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>luisana zerpa</a> on <a href="https://unsplash.com/photos/white-and-red-cupcake-with-white-icing-on-top-MJPr6nOdppw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className={linkClass}>Unsplash</a>
        </li>
      </ul>
    </div>
  )
}

export default Credits