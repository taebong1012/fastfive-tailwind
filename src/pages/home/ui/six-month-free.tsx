import { Cloud } from '@/pages/home/ui/cloud';

import { Container } from '@/shared/ui/container';
import { Typography } from '@/shared/ui/typography';

export const SixMonthFree = () => {
    return (
        <Container
            variant="marketingSection"
            className="bg-linear-to-br from-[#FFF0E0] to-[#FFE0E0]"
        >
            <Typography variant="description" className="text-accent text-center">
                NEW YEAR, NEW OFFICE
                <br />
                새해에는 더 좋은 곳에서 일해요
            </Typography>

            <div className="relative">
                <img
                    className="w-[260px] object-contain pt-20"
                    src="https://marketplace.canva.com/4yxS8/MAG7-W4yxS8/1/tl/canva-korean-lucky-bag-illustration-MAG7-W4yxS8.png"
                />

                <Cloud />
            </div>
        </Container>
    );
};
