import { motion } from "motion/react";
import {
  lineVariants,
  itemVariants,
  getMenuVariants,
} from "@/app/utils/motionVariants/motionVariants";

const Menu = ({ isOpen }: any) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={getMenuVariants()}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`w-full fixed z-99 flex items-end sm:items-center h-dvh pl-[9%] pr-[9%] sm:pl-28 sm:pr-28 xl:pl-32 xl:pr-21 bg-black`}
    >
      <div className="sm:flex-row flex-col flex sm:gap-0 gap-24 sm:pt-0 sm:pb-0 pt-[35%] pb-[15%] justify-between w-full items-center">
        <ul className="sm:w-6/13 md:w-5/9 lg:w-3/6 w-full">
          <motion.li
            whileHover="show"
            initial="hidden"
            variants={itemVariants}
            className="text-white pl-0 sm:pl-[18%] relative opacity-100 font-[Supreme] font-bold text-[50px] sm:text-[34px] md:text-[40px]  lg:text-[50px] xl:text-[52px] 2xl:text-[60px] leading-[160%] tracking-[0px] uppercase align-middle  group  cursor-pointer"
          >
            HOME
            <motion.div
              variants={lineVariants}
              className="absolute group-hover:block hidden right-0 border-2 border-[#E5E548] w-full"
            ></motion.div>
          </motion.li>
          <motion.li
            whileHover="show"
            initial="hidden"
            variants={itemVariants}
            className="text-white pl-0 sm:pl-[18%] relative opacity-100 font-[Supreme] font-bold text-[50px] sm:text-[34px] md:text-[40px]  lg:text-[50px] xl:text-[52px] 2xl:text-[60px] leading-[160%] tracking-[0px] uppercase align-middle  group  cursor-pointer"
          >
            WORKS
            <motion.div
              variants={lineVariants}
              className="absolute group-hover:block hidden right-0 border-2 border-[#E5E548] w-full"
            ></motion.div>
          </motion.li>
          <motion.li
            whileHover="show"
            initial="hidden"
            variants={itemVariants}
            className="text-white pl-0 sm:pl-[18%] relative opacity-100 font-[Supreme] font-bold text-[50px] sm:text-[34px] md:text-[40px]  lg:text-[50px] xl:text-[52px] 2xl:text-[60px] leading-[160%] tracking-[0px] uppercase align-middle  group  cursor-pointer"
          >
            COMPANY
            <motion.div
              variants={lineVariants}
              className="absolute group-hover:block hidden right-0 border-2 border-[#E5E548] w-full"
            ></motion.div>
          </motion.li>
          <motion.li
            whileHover="show"
            initial="hidden"
            variants={itemVariants}
            className="text-white pl-0 sm:pl-[18%] relative opacity-100 font-[Supreme] font-bold text-[50px] sm:text-[34px] md:text-[40px]  lg:text-[50px] xl:text-[52px] 2xl:text-[60px] leading-[160%] tracking-[0px] uppercase align-middle  group  cursor-pointer"
          >
            THOUGHTS
            <motion.div
              variants={lineVariants}
              className="absolute group-hover:block hidden right-0 border-2 border-[#E5E548] w-full"
            ></motion.div>
          </motion.li>
          <motion.li
            whileHover="show"
            initial="hidden"
            variants={itemVariants}
            className="text-white pl-0 sm:pl-[18%] relative opacity-100 font-[Supreme] font-bold text-[50px] sm:text-[34px] md:text-[40px]  lg:text-[50px] xl:text-[52px] 2xl:text-[60px] leading-[160%] tracking-[0px] uppercase align-middle  group  cursor-pointer"
          >
            CONTACT
            <motion.div
              variants={lineVariants}
              className="absolute group-hover:block hidden right-0 border-2 border-[#E5E548] w-full"
            ></motion.div>
          </motion.li>
        </ul>
        <div className="xl:w-[275px] lg:w-[240px]  sm:h-100 sm:gap-0 gap-12 w-full sm:w-[174px] md:w-[220px] flex flex-row sm:flex-col justify-around">
          <div className="flex flex-col gap-8">
            <h3 className="text-white font-[Supreme] font-bold sm:text-[14px] text-[14px] leading-[120%] tracking-[2px]">
              SOC
            </h3>
            <ul className="sm:gap-0 gap-2 flex flex-col">
              <motion.li
                whileHover={{
                  color: "#E5E548",
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="text-white font-[Supreme] font-normal sm:text-[12px] text-[12px] leading-[240%] tracking-[1px] cursor-pointer"
              >
                Instagram
              </motion.li>
              <motion.li
                whileHover={{
                  color: "#E5E548",
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="text-white font-[Supreme] font-normal sm:text-[12px] text-[12px] leading-[240%] tracking-[1px] cursor-pointer"
              >
                Twitter
              </motion.li>
              <motion.li
                whileHover={{
                  color: "#E5E548",
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="text-white font-[Supreme] font-normal sm:text-[12px] text-[12px] leading-[240%] tracking-[1px] cursor-pointer"
              >
                LinkedIn
              </motion.li>
              <motion.li
                whileHover={{
                  color: "#E5E548",
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                className="text-white font-[Supreme] font-normal sm:text-[12px] text-[12px] leading-[240%] tracking-[1px] cursor-pointer"
              >
                Facebook
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-white font-[Supreme] font-bold sm:text-[14px] text-[14px] leading-[120%] tracking-[2px]">
              NEURO IDEAS HQ
            </h3>
            <p className="text-white font-[Supreme] font-normal text-[12px] leading-[240%] tracking-[1px]">
              Nirmana Rd. 32 Building 123 <br /> Kampoeng Ideas <br /> Canggu,
              Bali
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 hidden sm:flex gap-8">
        <p className="font-[Supreme] text-[#666666] font-medium text-[12px] leading-[100%] tracking-[0.04em] uppercase align-middle">
          NEURO®, inc
        </p>
        <p className="font-[Supreme] text-[#666666] font-medium text-[12px] leading-[100%] tracking-[0.04em] uppercase align-middle">
          2022
        </p>
      </div>
      <img
        className="sm:block hidden absolute bottom-0 right-0 z-0"
        src="/WORKS.svg"
        alt="Works"
      />
    </motion.div>
  );
};

export default Menu;
