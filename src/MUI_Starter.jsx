import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import Dialog from '@mui/material/Dialog'
import Paper from '@mui/material/Paper'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import NavigationIcon from '@mui/icons-material/Navigation'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Switch from '@mui/material/Switch'

export function _Alert() {
  return <Alert severity="warning">This is a warning alert — check it out!</Alert>
}

export function _Autocomplete() {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={['One', 'Two', 'Three']}
      renderInput={(params) => (
        <TextField
          {...params}
          label="enter text"
          margin="normal"
          variant="outlined"
          sx={{ backgroundColor: 'white' }}
        />
      )}
    />
  )
}

export function _Avatar_image() {
  return <Avatar alt="Jay Doe" src="https://randomuser.me/api/portraits/lego/5.jpg" />
}

export function _Avatar_letter() {
  return <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
}

export function _Backdrop() {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      onClick={() => console.log('close backdrop')}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export function _Box() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}
    />
  )
}

export function _Breadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="https://mui.com/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="https://mui.com//material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  )
}

export function _Button() {
  return <Button variant="contained">Hello World</Button>
}

export function _Card() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be
          <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
          >
            •
          </Box>
          nev{' '}
          <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
          >
            •
          </Box>
          o{' '}
          <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
          >
            •
          </Box>
          lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          "a benevolent smile"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export function _Container() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: '260px' }} />
    </Container>
  )
}

export function _Dialog() {
  return (
    <Dialog onClose={() => console.log('clicked close')} open={true}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {['username@gmail.com', 'user02@gmail.com'].map((email) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => console.log('Clicked on email ' + email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'blue', color: 'lightblue' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => console.log('Clicked on addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  )
}

export function _Fab() {
  return (
    <Fab variant="extended">
      <NavigationIcon sx={{ mr: 1 }} />
      Navigate
    </Fab>
  )
}

export function _Grid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper sx={{ textAlign: 'center', padding: '10px' }}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ textAlign: 'center', padding: '10px' }}>xs=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ textAlign: 'center', padding: '10px' }}>xs=4</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={{ textAlign: 'center', padding: '10px' }}>xs=8</Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export function _ImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Breakfast"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Burger"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Camera"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Coffee"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Hats"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Honey"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Basketball"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Fern"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Mushrooms"
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>
  )
}

export function _Paper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128
        }
      }}
    >
      <Paper elevation={3} />
    </Box>
  )
}

export function _CircularProgress() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
}

export function _Rating() {
  return (
    <Rating
      name="simple-controlled"
      value={3}
      onChange={(event, newValue) => {
        console.log('set value to ', newValue)
      }}
    />
  )
}

export function _Switch() {
  return <Switch aria-label="Switch demo" defaultChecked />
}

export function _TextField() {
  return <TextField id="outlined-basic" label="Outlined" variant="outlined" />
}
