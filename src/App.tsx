import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Container } from '@mui/material'
import { ColorModeContext, ThemeButton } from './ThemeButton'
// import Divider from '@mui/material/Divider'
// import SpeedDialIcon from '@mui/material/SpeedDialIcon'
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
// import CloseIcon from '@mui/icons-material/Close'
// import SpeedDial from '@mui/material/SpeedDial'
// import SpeedDialAction from '@mui/material/SpeedDialAction'


function App() {
  const [sets, setSets] = useState<number>(0)
  const [experience, setExperience] = useState<string>('1')
  const [gender, setGender] = useState<string>('0')
  const [lifestyle, setLifestyle] = useState<string>('1')
  const [balance, setBalance] = useState<string>('1')
  const [frequency, setFrequence] = useState<string>('3')

  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  const experienceChange = (event: SelectChangeEvent) => {
    setExperience(event.target.value)
  }
  const genderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }
  const lifestyleChange = (event: SelectChangeEvent) => {
    setLifestyle(event.target.value)
  }
  const balanceChange = (event: SelectChangeEvent) => {
    setBalance(event.target.value)
  }
  const frequencyChange = (event: SelectChangeEvent) => {
    setFrequence(event.target.value)
  }

  useEffect(() => {
    setSets(Math.round((+frequency * 5) * +lifestyle * +balance * Math.sqrt(+experience) + (+gender * 3)))
  }, [experience, gender, lifestyle, balance, frequency])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ThemeButton />

        <Container maxWidth="sm">

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>TERENTEV<span style={{ color: 'yellow' }}>FIT</span></h1>
            <div style={{ marginBottom: 15 }}>Внеси свои данные, чтобы получить расчёт</div>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* Experience */}
            <Box >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Тренировочный стаж</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={experience}
                  label="Experience"
                  onChange={experienceChange}
                >
                  <MenuItem value={1}>Начинающий</MenuItem>
                  <MenuItem value={2}>Уверенный</MenuItem>
                  <MenuItem value={3}>Продвинутый</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Gender */}
            <Box >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={genderChange}
                >
                  <MenuItem value={0}>Мужской</MenuItem>
                  <MenuItem value={1}>Женский</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Lifestyle */}
            <Box >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Восстановление</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lifestyle}
                  label="Lifestyle"
                  onChange={lifestyleChange}
                >
                  <MenuItem value={0.5}>0,5</MenuItem>
                  <MenuItem value={0.6}>0,6</MenuItem>
                  <MenuItem value={0.7}>0,7</MenuItem>
                  <MenuItem value={0.8}>0,8</MenuItem>
                  <MenuItem value={0.9}>0,9</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={1.1}>1,1</MenuItem>
                  <MenuItem value={1.2}>1,2</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Balance */}
            <Box >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Энергетический баланс</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={balance}
                  label="Balance"
                  onChange={balanceChange}
                >
                  <MenuItem value={0.8}>0,8</MenuItem>
                  <MenuItem value={0.9}>0,9</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={1.1}>1,1</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Frequency */}
            <Box >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Частота тренировок</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={frequency}
                  label="Frequency"
                  onChange={frequencyChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                </Select>
              </FormControl>
            </Box>

          </Box>
          {/* <Divider /> */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              Примерное количество сетов в неделю на каждую группу мышц
            </div>
            <div style={{ fontSize: 25 }}>
              {sets}
            </div>
          </Box>




          {/* <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}> */}
          {/* <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
          >
            <SpeedDialAction
            // key={action.name}
            // icon={action.icon}
            // tooltipTitle={action.name}
            />
          </SpeedDial> */}
          {/* </Box> */}

        </Container>
      </ThemeProvider >
    </ColorModeContext.Provider>
  )
}

export default App
