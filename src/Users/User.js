// @flow
import * as React from 'react';
import {CardContent, Card, CardHeader, Typography, Grid, Collapse} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

export type IUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

type IAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

type IGeo = {
    lat: string;
    lng: string;
}

type ICompany = {
    name: string;
    catchPhrase: string;
    bs: string;
}

type UserProps = {
    user: IUser
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function User({user}: UserProps): React.Node {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Grid item xs>
            <Card>
                <CardHeader title={user.name} subheader={`Id: #${user.id}`}/>
                <CardContent>
                    <Typography component="p" color="textSecondary">Username: {user.username}</Typography>
                    <Typography component="p" color="textSecondary">Email: {user.email}</Typography>
                    <Typography component="p" color="textSecondary">Phone: {user.phone}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography component="p" color="textSecondary">
                            Address:
                            {` ${user.address.street}${user.address.street}, ${user.address.zipcode} ${user.address.city}`}
                        </Typography>
                        <Typography component="p" color="textSecondary">
                            Web: <a href={`http://www.${user.website}`}
                                    target="_blank" rel="noopener noreferrer">{user.website}</a>
                        </Typography>
                        <Typography component="p" color="textSecondary">Company: {user.company.name}</Typography>
                        <Typography component="p" color="textSecondary">
                            Email:
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}
