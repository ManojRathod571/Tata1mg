import { NavLink } from "react-router-dom";
import { BsBarChart,BsTag } from "react-icons/bs";
import {HiOutlineUserGroup } from "react-icons/hi";
import {SiProducthunt} from "react-icons/si";
import { MdOutlineDashboard} from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Sidebar.module.css"
import DashboardNav from "./DashboardNav";


const SideBar = ({isOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
 
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className={style.main_container}>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={style.sidebar }
        >
          <section className={style.routes}>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.heading}
                       
                      >
                       ANALYZE
                      </motion.div>
                    )}
                  </AnimatePresence>
                <NavLink
                  to={"/reports"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><BsBarChart /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                       REPORTS
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
       
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.heading}
                      >
                       MANAGE
                      </motion.div>
                    )}
                  </AnimatePresence>
               
                <NavLink
                  to={"/users"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><HiOutlineUserGroup /></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                        Users
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>

                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                  isActive ? style.active: style.link
                }
                >
                  <div className={style.icon}><SiProducthunt/></div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={style.link_text}
                      >
                        Products
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
          </section>
        </motion.div>

      </div>
    </>
  );
};

export default SideBar;