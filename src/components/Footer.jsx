import GithubImg from "../assets/github.svg";

function Footer() {
  return (
    <footer className="bg-[#083556] text-white p-[15px] md:p-[24px] xl:mx-[80px] rounded-t-[22px] mx-[28px]">
      <div className="flex md:flex-row flex-col items-center md:items-start w-full mb-[20px]">
        <div className="md:w-1/2 p-[10px] text-center md:text-left">
          <h2 className="font-bold mb-[10px] mt-[20px]">Mobile App</h2>
          <p>
            Learn or improve the most used language today by taking our courses,
            examples, exercices and more
          </p>
        </div>

        <div className="flex md:flex-row flex-col md:justify-evenly md:w-1/2 text-center md:text-left">
          <div className="p-[10px]">
            <h3 className="font-bold mb-[10px] mt-[20px]">Services</h3>
            <div>
              <p>Classes</p>
              <p>Examples</p>
              <p>Challenges</p>
            </div>
          </div>
          <div className="p-[10px]">
            <h3 className="font-bold mb-[10px] mt-[20px]">Team</h3>
            <div className="text-center md:text-left">
              <a
                className="inline-block"
                href="https://github.com/chingu-voyages/v47-tier3-team-28/tree/dev"
                target="_blank"
              >
                <img className="w-[40px]" src={GithubImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p>© 2024 - V-47 Team 28 | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
