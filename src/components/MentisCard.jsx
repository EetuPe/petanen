import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Chip from '@mui/joy/Chip';
import Mentis from '../assets/Mentis.png';

//Icons
import { DiReact } from 'react-icons/di';
import { DiJsBadge } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';

export default function MaterialCard() {
  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        sx={(theme) => ({
          width: 350,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: 'translateY(-2px)'
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
        })}
      >
        <AspectRatio
          variant="soft"
          sx={{
            flexGrow: 1,
            display: 'contents',
            '--AspectRatio-paddingBottom':
              'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))'
          }}
        >
          <img src={Mentis} loading="lazy" alt="" />
        </AspectRatio>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200
          }}
        >
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none'
            }}
          >
            <img alt="" src={Mentis} />
          </AspectRatio>

          <div className="text-left">
            <Typography level="h2" fontSize="xl" mb={0.5} fontWeight="lg">
              Mentis
            </Typography>
          </div>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <div>
              <Chip
                color="primary"
                size="sm"
                endDecorator={<DiReact />}
                onClick={function () {}}
              >
                ReactJS
              </Chip>
              <Chip
                color="warning"
                size="sm"
                endDecorator={<DiJsBadge />}
                onClick={function () {}}
              >
                Javascript
              </Chip>
              <Chip
                color="neutral"
                size="sm"
                onClick={function () {}}
                endDecorator={<DiHtml5 />}
                variant="outlined"
              >
                HTML
              </Chip>
              <Chip
                color="neutral"
                size="sm"
                onClick={function () {}}
                endDecorator={<DiCss3 />}
                variant="outlined"
              >
                CSS
              </Chip>
            </div>
          </Box>
          <div className="text-left">
            <Typography level="body1">
              A mastermind game where the player can guess the 4 color code by
              inputting a 4-digit code. Each color is assigned a numerical
              value.
            </Typography>
          </div>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <div>
              <Chip
                color="neutral"
                slotProps={{
                  action: {
                    component: 'a',
                    href: 'https://github.com/EetuPe/produni1.1'
                  }
                }}
                size="lg"
                variant="soft"
              >{`</>`}</Chip>
              <Chip
                color="warning"
                slotProps={{
                  action: {
                    component: 'a',
                    href: 'https://mentis.petanen.com'
                  }
                }}
                size="lg"
                variant="solid"
              >
                Live View
              </Chip>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
