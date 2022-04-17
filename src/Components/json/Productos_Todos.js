const productosTodos = [
    {
        "id": "Notebook_HP-245",
        "imagen": "./images/Notebook_HP-245-Ryzen5-8GB-480ssd.jpg",
        "nombre": "Notebook HP 245 Ryzen 8Gb 480Gb",
        "precio": "92000",
        "dataID": "Notebook_HP-245",
        "categoria": "notebooks",
        "stock": "8",
        "detalles": {
            "pantalla": "Pantalla: Tamaño de la pantalla: 14 pulgadas Anti-Glare LED SVA 220 SLIM. Resolución de la pantalla: 1366 px x 768 px. Frecuencia de actualización de la pantalla: 60 Hz",
            "procesador": "Procesador: AMD Ryzen 5 3500U 3.7 GHz, 4 núcleos.",
            "ram": "Ram: 1X8GB DDR4 2400. Cantidad de ranuras para la memoria RAM: 2. Capacidad máxima soportada de la memoria RAM: 16 GB",
            "almacenamiento": "Almacenamiento: M.2 256 GB SSD SATA-3 TLC",
            "sistema": "Sistema: Windows 10 Pro 64bit",
            "dimensiones": "Dimensiones: Ancho: 33,5 cm. Profundidad: 23,4 cm. Altura: 2 cm. Peso: 1.52 kg"
        }
    },
    {
        "id": "Notebook_HP-250",
        "imagen": "./images/Notebook_HP-250-G7-8GB-1TB.jpg",
        "nombre": "Notebook HP 250 G7 8Gb 1Tb",
        "precio": "94000",
        "dataID": "Notebook_HP-250",
        "categoria": "notebooks",
        "stock": "7",
        "detalles": {
            "pantalla": "Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",
            "procesador" : "Procesador: Intel® Core™ i5-1035G1 (6M Cache, 3.60 GHz). Número de núcleos de procesador: 4 / 8 subprocesos utilizando Hyper-Threading. Caché: 6 MB Intel® Smart Cache",
            "ram": "Ram: 8 GB de SDRAM DDR4-2666 (2 x 4 GB) Velocidades de transferencia de hasta 2666 MT/s",
            "almacenamiento": "Almacenamiento: SATA de 1 TB y 5400 rpm",
            "sistema": "Sistema: Windows 10",
            "dimensiones": "Peso: Desde 1,78 kg (El peso varía según la configuración). Dimensiones: 37,6 x 24,6 x 2,25 cm"
        }
    },
    {
        "id": "Smartphone_Moto-G10-Power",
        "imagen": "./images/Smartphone_Moto_g10_Power.jpg",
        "nombre": "Smartphone Moto G10 Power",
        "precio": "29000",
        "dataID": "Smartphone_Moto-G10-Power",
        "categoria": "smartphones",
        "stock": "0",
        "detalles": {
            "pantalla": "Pantalla: LCD 6,5 HD+",
            "procesador" : "Procesador: Snapdragon 460",
            "ram": "Ram: 4 GB",
            "almacenamiento": "Almacenamiento: 64 GB MicroSD hasta 1 TB",
            "sistema": "Sistema: Android 11",
            "dimensiones": "Dimensiones: 165,22 x 75,73 x 9,89 mm 200 g."
        }
    },
    {
        "id": "Smartphone_Iphone-X",
        "imagen": "./images/Smartphone_IPhone_X.jpg",
        "nombre": "Smartphone Iphone X",
        "precio": "190000",
        "dataID": "Smartphone_Iphone-X",
        "categoria": "smartphones",
        "stock": "4",
        "detalles": {
            "pantalla": "Pantalla: OLED 5.8 pulgadas",
            "procesador" : "Procesador: Chip A11 Bionic con arquitectura de 64 bits, coprocesador de movimiento M11",
            "ram": "Ram: 3GB",
            "almacenamiento": "Almacenamiento 64 GB (no ampliables con microSD)",
            "sistema": "Sistema: IOS 11",
            "dimensiones": "Dimensiones: 143,6 x 70,9 x 7,7 milímetros, 178 gramos"
        }
    },
    {
        "id": "Samsung-Galaxy-A12-64gb",
        "imagen": "./images/Samsung_Galaxy_a12_64gb.jpg",
        "nombre": "Samsung Galaxy A12 64 GB azul 4 GB RAM",
        "precio": "35000",
        "dataID": "Samsung-Galaxy-A12-64gb",
        "categoria": "smartphones",
        "stock": "5",
        "detalles": {
            "pantalla": "Pantalla: PLS de 6.5 pulgadas",
            "procesador": "Procesador MediaTek MT6765 Helio P35 Octa-Core de 2.3GHz.",
            "ram": "Ram: 4Gb",
            "almacenamiento": "Memoria interna de 64Gb",
            "sistema": "Android 10",
            "dimensiones": "Peso 205 gr. Altura x Ancho x Profundidad 164 mm x 75.8 mm x 8.9 mm"
        }
    },
    {
        "id": "Samsung-Galaxy-S20-128gb",
        "imagen": "./images/Samsung_Galaxy_s20_128gb.jpg",
        "nombre": "Samsung Galaxy S20 FE 128 GB cloud navy 6 GB RAM",
        "precio": "96000",
        "dataID": "Samsung-Galaxy-S20-128gb",
        "categoria": "smartphones",
        "stock": "9",
        "detalles": {
            "pantalla": "Pantalla Super AMOLED de 6.5 pulgadas",
            "procesador": "Procesador: One UI 2",
            "ram": "Ram: 6Gb",
            "almacenamiento": "Almacenamiento: Memoria interna de 128GB",
            "sistema": "Android 10 (actualizable a android 11)",
            "dimensiones": "Alto x ancho x profundidad: 159.8 mm x 74.5 mm x 8.4 mm. Peso: 190 gr"
        }
    },
    {
        "id": "Samsung-Galaxy-A52-128gb",
        "imagen": "./images/Samsung_Galaxy_a52_128gb.jpg",
        "nombre": "Samsung Galaxy A52 128 GB 6 GB RAM",
        "precio": "66000",
        "dataID": "Samsung-Galaxy-A52-128gb",
        "categoria": "smartphones",
        "stock": "12",
        "detalles": {
            "pantalla": "Pantalla Super AMOLED de 6.5",
            "procesador": "Procesador Snapdragon 720G Octa-Core de 2.3GHz",
            "ram": "Ram: 6Gb",
            "almacenamiento": "Memoria interna de 128Gb",
            "sistema": "Sistema: Android 10",
            "dimensiones": "Peso: 189 gr. Altura x Ancho x Profundidad (159.9 mm x 75.1 mm x 8.4 mm)."
        }
    },
    {
        "id": "Notebook-Dell-Inspiron",
        "imagen": "./images/Notebook_Dell-3505-16ram.jpg",
        "nombre": "Notebook Dell Inspiron 3505 gris",
        "precio": "116800",
        "dataID": "Notebook-Dell-Inspiron",
        "categoria": "notebooks",
        "stock": "10",
        "detalles": {
            "pantalla": "Pantalla de 15.6 pulgadas",
            "procesador": "Procesador AMD Ryzen 5 3450U",
            "ram": "Ram: 16Gb",
            "almacenamiento": "Memoria interna de 256GB SSD",
            "sistema": "Sistema: Windows 10 Home",
            "dimensiones": "Peso: 1.98 kg, ancho: 364 mm, profundidad 249 mm, altura 19.9 mm"
        }
    },
    {
        "id": "Moto-E20-2Gb",
        "imagen": "./images/Smartphone_Moto_E20_azul_aqua.jpg",
        "nombre": "Smartphone Moto E20 32 GB azul aqua 2 GB RAM",
        "precio": "24750",
        "dataID": "Moto-E20-2Gb",
        "categoria": "smartphones",
        "stock": "17",
        "detalles": {
            "pantalla": "Pantalla IPS de 6.5 pulgadas",
            "procesador": "Procesador Unisoc T606 Octa-Core de 1.6GHz",
            "ram": "Ram: 2Gb",
            "almacenamiento": "Memoria interna de 32GB",
            "sistema": "Sistema: Android 11",
            "dimensiones": "Peso: 185 gr. Altura x Ancho x Profundidad 164.83 mm x 75.53 mm x 8.48 mm"
        }
    },
    {
        "id": "Moto-E40-64gb",
        "imagen": "./images/Smartphone_Moto_E40_64gb.jpg",
        "nombre": "Smartphone Motorola E40 64Gb",
        "precio": "33500",
        "dataID": "Moto-E40-64gb",
        "categoria": "smartphones",
        "stock": "5",
        "detalles": {
            "pantalla": "Pantalla IPS de 6.5 pulgadas",
            "procesador": "Procesador Unisoc T700 Octa-Core de 1.8GHz",
            "ram": "Ram: 4Gb",
            "almacenamiento": "Memoria interna de 64Gb",
            "sistema": "Sistema: Android 10",
            "dimensiones": "Peso: 198 gr. Altura x Ancho x Profundidad 165.1 mm x 75.6 mm x 9.1 mm"
        }
    },
    {
        "id": "Huawei-p30-lite",
        "imagen": "./images/Smartphone_Huawei_p30_lite.jpg",
        "nombre": "Huawei P30 Lite 128 GB",
        "precio": "150000",
        "dataID": "Huawei-p30-lite",
        "categoria": "smartphones",
        "stock": "3",
        "detalles": {
            "pantalla": "Pantalla IPS de 6.15 pulgadas",
            "procesador": "Procesador HiSilicon Kirin 710 Octa-Core de 2.2GHz",
            "ram": "Ram: 4Gb",
            "almacenamiento": "Memoria interna de 128GB",
            "sistema": "Sistema: Android 9",
            "dimensiones": "Peso 159 gr. Altura x Ancho x Profundidad 152.9 mm x 72.7 mm x 7.4 mm"
        }
    },
    {
        "id": "Samsung-Galaxy-A10",
        "imagen": "./images/Smartphone_Samsung-Galaxy-A10.jpg",
        "nombre": "Samsung Galaxy A10 32 Gb",
        "precio": "27000",
        "dataID": "Samsung-Galaxy-A10",
        "categoria": "smartphones",
        "stock": "2",
        "detalles": {
            "pantalla": "Tamaño de la pantalla: 6.2 pulgadas",
            "procesador": "Procesador: Exynos 7884. 2x1.6 GHz Cortex-A73,6x1.35 GHz Cortex-A53",
            "ram": "Ram: 2Gb",
            "almacenamiento": "Memoria interna de 32Gb",
            "sistema": "Sistema: Android 9 Pie",
            "dimensiones": "Peso: 168 gr. Altura x Ancho x Profundidad (155.6 mm x 75.6 mm x 7.9 mm)"
        }
    },
    {
        "id": "Sony-Mdr-As210",
        "imagen": "./images/Auriculares_Deportivos_Sony-Mdr-As210.jpg",
        "nombre": "Auriculares deportivos Sony mdr-as210",
        "precio": "6250",
        "dataID": "Sony-Mdr-As210",
        "categoria": "accesorios",
        "stock": "10",
        "detalles": {
            "resumen": "Con una sensibilidad de 104 dB/mW y un rango de frecuencia de 17 a 22.000 Hz, podrás subir el volumen y escuchar cada detalle"
        }
    },
    {
        "id": "Sony-ch510",
        "imagen": "./images/Auriculares_inalambricos_Sony_ch510.jpg",
        "nombre": "Auriculares inalámbricos Sony WH-CH510",
        "precio": "5300",
        "dataID": "Sony-ch510",
        "categoria": "accesorios",
        "stock": "0",
        "detalles": {
            "resumen": "Alcance inalámbrico de 10 m. La batería dura 35 hs. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos"
        }
    },
    {
        "id": "Powerbank-Gadnic",
        "imagen": "./images/PowerBank_Gadnic.jpg",
        "nombre": "Power Bank Gadnic 22000 Mah Protable Carga Rapida Pro Usb",
        "precio": "8500",
        "dataID": "Powerbank-Gadnic",
        "categoria": "accesorios",
        "stock": "6",
        "detalles": {
            "resumen": "Con 22000mAh y 4 indicadores Led de alta precisión que te permite conocer con exactitud la energía restante. También cuenta con un sistema de carga rápida para que puedas estar comunicado las 24hs. Cuenta con dos puertos de carga USB en el Power Energy Gadnic para que puedas recargar dos dispositivos a la vez y ahorrar tiempo."
        }
    },
    {
        "id": "Sony-wh",
        "imagen": "./images/Auriculares_inalambricos_Sony-wh.jpg",
        "nombre": "Auriculares inalámbricos Sony WH-1000XM4",
        "precio": "13000",
        "dataID": "Sony-wh",
        "categoria": "accesorios",
        "stock": "11",
        "detalles": {
            "resumen": "Alcance inalámbrico de 10 m. La batería dura 30 h. Modo manos libres incluido. Asistentes de voz integrados: Alexa y Google Assistant. Con cancelación de ruido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos"
        }
    },
];

export default productosTodos