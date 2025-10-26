"use client";

import {motion} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import {LinkComponent as Link} from "@/components/ui/link";

const fadeInVariant = (delay = 0) => {
    return {
        initial: {opacity: 0, y: 40},
        animate: {opacity: 1, y: 0},
        transition: {type: "spring" as const, stiffness: 60, delay},
    };
};

const PrivacyPolicy = () => (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-muted/60 to-background py-12">
        <Card className="w-full max-w-2xl shadow-xl rounded-2xl border border-border bg-card/80 backdrop-blur">
            <CardContent className="p-8">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <Heading
                        level={1}
                        className="text-center mb-8 text-4xl font-extrabold text-primary tracking-tight"
                    >
                        Privacy Policy
                    </Heading>
                    <motion.div {...fadeInVariant(0.1)}>
                        <Text className="mb-4 text-muted-foreground text-lg">
                            Welcome to PlayScope! This privacy policy explains how we collect, use, and protect your
                            information when you use our app.
                        </Text>
                    </motion.div>
                    <motion.div {...fadeInVariant(0.2)}>
                        <Heading level={2} className="mb-2 font-semibold text-xl text-secondary-foreground">
                            Information Collection
                        </Heading>
                        <Text className="mb-2 text-muted-foreground">
                            PlayScope does not collect any personal information from its users. The app is designed to
                            be simple and does not require any data input from you.
                        </Text>
                        <Text className="mb-2 text-muted-foreground">
                            The only information collected is for the purpose of serving advertisements via Unity Ads,
                            and for analytics and performance monitoring.
                        </Text>
                    </motion.div>
                    <motion.div {...fadeInVariant(0.3)}>
                        <Heading level={2} className="mb-2 font-semibold text-xl text-secondary-foreground">
                            Analytics and Monitoring
                        </Heading>
                        <Text className="mb-2 text-muted-foreground">
                            PlayScope uses Google Analytics, Google Performance, and Crashlytics to help us understand
                            app usage, monitor performance, and improve stability. These services may collect
                            non-personal information such as device type, usage statistics, and crash reports.
                        </Text>
                        <Text className="mb-2 text-muted-foreground">
                            Data collected by these services is used solely to improve the app experience and is not
                            shared with third parties except as required for analytics and diagnostics.
                        </Text>
                    </motion.div>
                    <motion.div {...fadeInVariant(0.4)}>
                        <Heading level={2} className="mb-2 font-semibold text-xl text-secondary-foreground">
                            Unity Ads
                        </Heading>
                        <Text className="mb-2 text-muted-foreground">
                            PlayScope uses Unity Ads to serve advertisements. Unity Ads may collect certain information
                            to display relevant ads. Please refer to{" "}
                            <Link
                                href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                                target="_blank"
                                rel="noopener"
                                className="underline"
                            >
                                Unity&apos;s privacy policy
                            </Link>{" "}
                            for more information.
                        </Text>
                        <Text className="mb-2 text-muted-foreground">
                            The information collected by Unity Ads is used solely for ad-serving purposes and is not
                            shared with any third parties beyond what is necessary for the operation of the ad network.
                        </Text>
                    </motion.div>
                    <motion.div {...fadeInVariant(0.5)}>
                        <Heading level={2} className="mb-2 font-semibold text-xl text-secondary-foreground">
                            Changes to This Policy
                        </Heading>
                        <Text className="mb-2 text-muted-foreground">
                            We may update this privacy policy from time to time. Any changes will be posted on this
                            page. We encourage you to review this policy periodically to stay informed about how we are
                            protecting your information.
                        </Text>
                        <Text className="mb-2 text-muted-foreground">
                            If we make significant changes to the policy, we will provide a more prominent notice.
                        </Text>
                    </motion.div>
                    <motion.div {...fadeInVariant(0.6)}>
                        <Heading level={2} className="mb-2 font-semibold text-xl text-secondary-foreground">
                            Contact Us
                        </Heading>
                        <Text className="text-muted-foreground">
                            If you have any questions about this privacy policy, please contact us at{" "}
                            <Link href="mailto:rayensbai2@gmail.com" className="underline">
                                rayensbai2@gmail.com
                            </Link>
                            . We are committed to addressing your questions and resolving any concerns you may have.
                        </Text>
                    </motion.div>
                </motion.div>
            </CardContent>
        </Card>
    </div>
);

export default PrivacyPolicy;