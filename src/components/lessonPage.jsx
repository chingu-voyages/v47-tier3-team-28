import ReactPlayer from "react-player";
import "../index.css";

const features = [
    {
        name: "Push to deploy",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    },
    {
        name: "SSL certificates",
        description:
            "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    },
    {
        name: "Simple queues",
        description:
            "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    },
    {
        name: "Advanced security",
        description:
            "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    },
];

function LessonPage() {
    return (
        <>
            <div className="bg-gray-100 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:grid lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                        {/* <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                Deploy faster
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Everything you need to deploy your app
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                                at. In mi viverra elit nunc.
                            </p>
                        </div> */}

                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                            <div
                                className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                                
                            >
                                <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=oUFJJNQGwhk' width='100%' />
                            </div>

                        </div>
                        <div className="text-base">Concept creation</div>
                        <div className="flex justify-between py-10">
                                <div className="pl-16">A Cuurse by Steve Haris</div>
                                <div className="flex">
                                    <div className="pr-10">{features.length} lessons</div>
                                    <div className="pr-5">3 hours</div>
                                    <div className="pr-5">3 hours</div>
                                    <div className="pr-5">3 hours</div>
                                    <div className="pr-5">3 hours</div>
                                </div>
                            </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                            <div className="flex justify-between py-10">
                                <div className="pl-16">Next Lessons</div>
                                <div className="flex">
                                    <div className="pr-10">{features.length} lessons</div>
                                    <div>3 hours</div>
                                </div>
                            </div>
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none ">
                                {features.map((feature) => (
                                    <div key={feature.name} className=" pl-16 flex">
                                        <div className="w-1/4">
                                            <div className=" col-span-1 left-0 flex h-full w-full items-center justify-center rounded-lg bg-indigo-600">
                                                {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                                            </div>
                                        </div>
                                        <div className="w-3/4">
                                            <div className="flex justify-between">
                                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                                    {feature.name}
                                                </dt>
                                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                                    {feature.name} Hi
                                                </dt>
                                            </div>

                                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                                {feature.description}
                                            </dd>
                                        </div>
                                    </div>
                                    //     <div key={feature.name} className="relative pl-16">
                                    //     <dt className="text-base font-semibold leading-7 text-gray-900">
                                    //         <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    //             {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                                    //         </div>
                                    //         {feature.name}
                                    //     </dt>
                                    //     <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                    // </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none ">
                            {features.map((feature) => (
                                <div key={feature.name} className=" pl-16 flex">
                                    <div className="w-1/4">
                                        <div className=" col-span-1 left-0 flex h-20 w-20 items-center justify-center rounded-lg bg-indigo-600">
                                            {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                                        </div>
                                    </div>
                                    <div className="w-3/4">
                                        <dt className="text-base font-semibold leading-7 text-gray-900">
                                            {feature.name}
                                        </dt>


                                        <dd className="mt-2 text-sm leading-7 text-gray-600">
                                            {feature.description}
                                        </dd>
                                    </div>
                                </div>
                                //     <div key={feature.name} className="relative pl-16">
                                //     <dt className="text-base font-semibold leading-7 text-gray-900">
                                //         <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                //             {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                                //         </div>
                                //         {feature.name}
                                //     </dt>
                                //     <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                // </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LessonPage;
